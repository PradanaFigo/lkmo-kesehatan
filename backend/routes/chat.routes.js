// backend/routes/chat.routes.js
const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');
const pool = require('../config/db');

// GET /api/chats/stats → ambil statistik chat dokter
router.get('/stats', async (req, res) => {
  try {
    const doctorId = req.user.id;
    
    if (!doctorId) {
      return res.status(401).json({ error: 'User belum login' });
    }

    const query = `
      SELECT 
        COUNT(DISTINCT CASE WHEN c.status = 'waiting' THEN c.sender_id END) as waiting,
        COUNT(DISTINCT CASE WHEN c.status = 'ongoing' THEN c.sender_id END) as ongoing,
        COUNT(DISTINCT CASE WHEN c.status IN ('waiting', 'ongoing', 'completed') THEN c.sender_id END) as total
      FROM chats c
      WHERE c.receiver_id::text = $1::text
      AND c.status IS NOT NULL
    `;

    const result = await pool.query(query, [String(doctorId)]);
    const stats = result.rows[0];

    // Convert counts from string to number
    stats.waiting = parseInt(stats.waiting || 0);
    stats.ongoing = parseInt(stats.ongoing || 0);
    stats.total = parseInt(stats.total || 0);

    console.log('Stats for doctor:', doctorId, stats);
    
    res.json(stats);
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ 
      error: 'Gagal mengambil statistik', 
      details: error.message 
    });
  }
});

// GET /api/chats/history/:userId/:doctorId → ambil riwayat chat antara user dan dokter
router.get('/history/:userId/:doctorId', async (req, res) => {
  try {
    const { userId, doctorId } = req.params;
    const query = `
      SELECT sender_id, receiver_id, message, created_at
      FROM chats
      WHERE (sender_id = $1 AND receiver_id = $2)
         OR (sender_id = $2 AND receiver_id = $1)
      ORDER BY created_at ASC
    `;
    const result = await pool.query(query, [userId, doctorId]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching chat history:', error);
    res.status(500).json({ error: 'Gagal mengambil riwayat chat' });
  }
});

// GET /api/chats/patients → ambil daftar pasien yang pernah chat dengan dokter
router.get('/patients', async (req, res) => {
  try {
    const doctorId = req.user.id;

    // Validasi apakah doctorId ada
    if (!doctorId) {
      return res.status(401).json({ error: 'User belum login' });
    }

    console.log('Doctor ID:', doctorId); // Debug log
    
    // Debug: Periksa semua chat yang ada
    const debugQuery = 'SELECT sender_id, receiver_id, message, status, created_at FROM chats ORDER BY created_at DESC LIMIT 5';
    const debugResult = await pool.query(debugQuery);
    console.log('Recent chats:', debugResult.rows);
    
    // Debug: Periksa user yang login
    const userQuery = 'SELECT id, username, role FROM users WHERE id::text = $1';
    const userResult = await pool.query(userQuery, [String(doctorId)]);
    console.log('Current user:', userResult.rows[0]);
    const query = `
      WITH last_messages AS (
        SELECT 
          sender_id,
          MAX(created_at) as last_message_time
        FROM chats
        WHERE receiver_id::text = $1::text
        GROUP BY sender_id
      )
      SELECT DISTINCT
        c.sender_id AS patient_id,
        u.full_name AS patient_name,
        u.gender AS patient_gender,
        u.age AS patient_age,
        lm.last_message_time,
        c.status
      FROM chats c
      JOIN last_messages lm ON c.sender_id = lm.sender_id 
        AND c.created_at = lm.last_message_time
      JOIN users u ON u.id::text = c.sender_id::text
      WHERE c.receiver_id::text = $1::text
      ORDER BY lm.last_message_time DESC
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

// GET /api/chats/history/:userId - Get chat history with specific user
router.get('/history/:userId', async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const otherUserId = req.params.userId;
    
    console.log('Fetching chat history between:', currentUserId, 'and', otherUserId);
    
    const history = await Chat.getHistory(currentUserId, otherUserId);
    res.json(history);
  } catch (error) {
    console.error('Error fetching chat history:', error);
    res.status(500).json({ 
      error: 'Gagal mengambil riwayat chat',
      details: error.message 
    });
  }
});

module.exports = router;