// backend/scripts/run-migrations.js
const fs = require('fs').promises;
const path = require('path');
const pool = require('../config/db');

async function runMigrations() {
  try {
    // Read and execute add_status_to_chats.sql
    const statusSql = await fs.readFile(path.join(__dirname, '../migrations/add_status_to_chats.sql'), 'utf8');
    await pool.query(statusSql);
    console.log('Added status column to chats table');

    // Create chat_queue table
    const queueSql = `
    CREATE TABLE IF NOT EXISTS chat_queue (
      id SERIAL PRIMARY KEY,
      patient_id INTEGER NOT NULL,
      doctor_id INTEGER NOT NULL,
      priority VARCHAR(10) DEFAULT 'normal',
      status VARCHAR(20) DEFAULT 'waiting',
      queue_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (patient_id) REFERENCES users(id),
      FOREIGN KEY (doctor_id) REFERENCES users(id)
    );
    
    -- Create index for faster queries
    CREATE INDEX IF NOT EXISTS idx_chat_queue_status ON chat_queue(status);
    CREATE INDEX IF NOT EXISTS idx_chat_queue_doctor ON chat_queue(doctor_id);
    `;
    await pool.query(queueSql);
    console.log('Created chat_queue table');

    console.log('All migrations completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
  }
}

runMigrations();