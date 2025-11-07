// backend/scripts/fix-queue-table.js
const pool = require('../config/db');

async function fixQueueTable() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    // Drop the existing chat_queue table and recreate it with correct types
    await client.query(`
      DROP TABLE IF EXISTS chat_queue;
      
      CREATE TABLE chat_queue (
        id SERIAL PRIMARY KEY,
        patient_id INTEGER NOT NULL,
        doctor_id INTEGER NOT NULL,
        priority VARCHAR(10) DEFAULT 'normal',
        status VARCHAR(20) DEFAULT 'waiting',
        queue_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (patient_id) REFERENCES users(id),
        FOREIGN KEY (doctor_id) REFERENCES users(id)
      );

      CREATE INDEX idx_chat_queue_status ON chat_queue(status);
      CREATE INDEX idx_chat_queue_doctor ON chat_queue(doctor_id);
    `);

    await client.query('COMMIT');
    console.log('Successfully recreated chat_queue table');
    process.exit(0);
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error recreating chat_queue table:', error);
    process.exit(1);
  } finally {
    client.release();
  }
}

fixQueueTable();