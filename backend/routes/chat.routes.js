// backend/routes/chat.routes.js
const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');
const pool = require('../config/db'); // ← UBAH PATH-NYA KE config/db

// GET /api/chats/patients → ambil daftar pasien yang pernah chat dengan dokter
router.get('/patients', async (req, res) => {
  try {
    const doctorId = req.user.id;

    // Validasi apakah doctorId ada
    if (!doctorId) {
      return res.status(401).json({ error: 'User belum login' });
    }

    console.log('Doctor ID:', doctorId); // Debug log

    // Ambil daftar pasien yang pernah mengirim pesan ke dokter ini.
    // Gunakan JOIN ke tabel users (mengasumsikan sender_id menyimpan user.id)
    // Cast both sides to text to avoid type-mismatch errors if sender_id/receiver_id
    // are stored as username (text) or numeric id in different records.
    const query = `
      SELECT
        c.sender_id AS patient_id,
        u.full_name AS patient_name,
        u.gender AS patient_gender,
        u.age AS patient_age,
        MAX(c.created_at) AS last_message_time
      FROM chats c
      JOIN users u ON u.id::text = c.sender_id::text
      WHERE c.receiver_id::text = $1::text
      GROUP BY c.sender_id, u.full_name, u.gender, u.age
      ORDER BY last_message_time DESC
    `;

    const result = await pool.query(query, [String(doctorId)]);

    console.log('Query result:', result.rows); // Debug log

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ 
      error: 'Gagal mengambil daftar pasien', 
      details: error.message 
    });
  }
});

module.exports = router;