// routes/auth.routes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { hashPassword, verifyPassword, generateToken } = require('../utils/jwt');
const pool = require('../config/db');

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, full_name, gender, age } = req.body;

    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'username, email, dan password wajib diisi' });
    }

    // Cek apakah username/email sudah ada
    const existingUser = await User.findByUsername(username);
    if (existingUser) {
      return res.status(400).json({ error: 'Username sudah digunakan' });
    }

    // Hash password
    const password_hash = await hashPassword(password);

    // Simpan ke database
    const newUser = await User.create({
      username,
      email,
      password_hash,
      full_name,
      gender,
      age
    });

    // Generate token
    const token = generateToken(newUser);

    res.status(201).json({
      message: 'Registrasi berhasil',
      token,
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        full_name: newUser.full_name,
        gender: newUser.gender,
        age: newUser.age
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    if (error && error.stack) {
      console.error(error.stack);
    }
    // Handle unique constraint violation (username/email already exists)
    if (error && error.code === '23505') {
      return res.status(409).json({ error: 'Username atau email sudah terdaftar' });
    }
    res.status(500).json({ error: 'Server error', details: error.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Cari user
    const user = await User.findByUsername(username);
    if (!user) {
      return res.status(401).json({ error: 'Username atau password salah' });
    }

    // Verifikasi password
    const isMatch = await verifyPassword(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Username atau password salah' });
    }

    // Generate token
    const token = generateToken(user);

    res.status(200).json({
      message: 'Login berhasil',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        full_name: user.full_name,
        gender: user.gender,
        age: user.age,
        role: user.role
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/auth/users/:id - Get user details
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User tidak ditemukan' });
    }
    // Don't send sensitive information
    const { password_hash, ...safeUser } = user;
    res.json(safeUser);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/auth/doctors - Get list of all doctors
router.get('/doctors', async (req, res) => {
  try {
    const query = `
      SELECT id, username, full_name, gender, age, specialization
      FROM users 
      WHERE role = 'dokter'
      ORDER BY full_name ASC
    `;
    
    const result = await pool.query(query);
    console.log('Found doctors:', result.rows.length);
    
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ 
      error: 'Gagal mengambil daftar dokter',
      details: error.message 
    });
  }
});

module.exports = router;