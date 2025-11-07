// backend/models/Chat.js
const pool = require('../config/db');

class Chat {
  // Simpan pesan ke database
  static async create({ sender_id, receiver_id, message }) {
    const query = `
      WITH existing_chat AS (
        SELECT status 
        FROM chats 
        WHERE (sender_id = $1 AND receiver_id = $2) 
           OR (sender_id = $2 AND receiver_id = $1)
        ORDER BY created_at DESC 
        LIMIT 1
      )
      INSERT INTO chats (sender_id, receiver_id, message, status)
      VALUES (
        $1, 
        $2, 
        $3,
        COALESCE(
          (SELECT status FROM existing_chat),
          CASE 
            WHEN EXISTS (
              SELECT 1 FROM users 
              WHERE id::text = $2::text 
              AND role = 'dokter'
            ) THEN 'waiting'
            ELSE 'ongoing'
          END
        )
      )
      RETURNING id, sender_id, receiver_id, message, status, created_at
    `;
    
    const values = [sender_id, receiver_id, message];
    console.log('Creating chat with values:', values);
    const result = await pool.query(query, values);
    console.log('Chat created:', result.rows[0]);
    return result.rows[0];
  }

  // Update status chat
  static async updateStatus(chatId, status) {
    const query = `
      UPDATE chats 
      SET status = $1 
      WHERE id = $2
      RETURNING id, sender_id, receiver_id, message, status, created_at
    `;
    const values = [status, chatId];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  // Ambil riwayat chat antara dua user
  static async getHistory(sender_id, receiver_id) {
    const query = `
      SELECT 
        c.*,
        us.full_name as sender_name,
        ur.full_name as receiver_name
      FROM chats c
      LEFT JOIN users us ON c.sender_id::text = us.id::text
      LEFT JOIN users ur ON c.receiver_id::text = ur.id::text
      WHERE (c.sender_id::text = $1::text AND c.receiver_id::text = $2::text)
         OR (c.sender_id::text = $2::text AND c.receiver_id::text = $1::text)
      ORDER BY c.created_at ASC
    `;
    const result = await pool.query(query, [sender_id, receiver_id]);
    return result.rows;
  }
}

module.exports = Chat;