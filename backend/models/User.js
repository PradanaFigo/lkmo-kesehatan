// models/User.js
const pool = require('../config/db');

class User {
  static async create(userData) {
    // default role uses Indonesian label to match DB constraint
    const { username, email, password_hash, full_name, gender, age, role = 'pasien' } = userData;
    const query = `
      INSERT INTO users (username, email, password_hash, full_name, gender, age, role)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, username, email, full_name, gender, age, role, created_at
    `;
    const values = [username, email, password_hash, full_name, gender, age, role];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async findByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = $1';
    const result = await pool.query(query, [username]);
    return result.rows[0];
  }

  static async findById(id) {
    const query = 'SELECT id, username, email, full_name, gender, age, created_at FROM users WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
  // Tambahkan fungsi baru di models/User.js
  static async findAll() {
    const query = 'SELECT id, username, email, full_name, gender, age, role, created_at FROM users ORDER BY created_at DESC';
    const result = await pool.query(query);
    return result.rows;
  } 

  static async updateRole(userId, role) {
    const query = 'UPDATE users SET role = $1 WHERE id = $2 RETURNING *';
    const result = await pool.query(query, [role, userId]);
    return result.rows[0];
  }
}

module.exports = User;