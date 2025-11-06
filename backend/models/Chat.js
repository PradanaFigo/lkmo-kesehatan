// backend/models/Chat.js
const pool = require('../config/db');

class Chat {
  // Simpan pesan ke database
  static async create({ sender_id, receiver_id, message }) {
    const query = `
      INSERT INTO chats (sender_id, receiver_id, message)
      VALUES ($1, $2, $3)
      RETURNING id, sender_id, receiver_id, message, created_at
    `;
    const values = [sender_id, receiver_id, message];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  // Ambil riwayat chat antara dua user
  static async getHistory(sender_id, receiver_id) {
    const query = `
      SELECT * FROM chats
      WHERE (sender_id = $1 AND receiver_id = $2)
         OR (sender_id = $2 AND receiver_id = $1)
      ORDER BY created_at ASC
    `;
    const result = await pool.query(query, [sender_id, receiver_id]);
    return result.rows;
  }
}

module.exports = Chat;