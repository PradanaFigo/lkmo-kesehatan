// backend/scripts/fix-id-types.js
const pool = require('../config/db');

async function fixIdTypes() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // First, alter chat_queue table to match chats table (changing to varchar)
    await client.query(`
      ALTER TABLE chat_queue 
      ALTER COLUMN patient_id TYPE varchar USING patient_id::varchar,
      ALTER COLUMN doctor_id TYPE varchar USING doctor_id::varchar;
    `);

    // Update foreign key constraints
    await client.query(`
      ALTER TABLE chat_queue 
      DROP CONSTRAINT IF EXISTS chat_queue_patient_id_fkey,
      DROP CONSTRAINT IF EXISTS chat_queue_doctor_id_fkey;
    `);

    await client.query(`
      ALTER TABLE chat_queue
      ADD CONSTRAINT chat_queue_patient_id_fkey 
      FOREIGN KEY (patient_id) 
      REFERENCES users(id::varchar),
      ADD CONSTRAINT chat_queue_doctor_id_fkey 
      FOREIGN KEY (doctor_id) 
      REFERENCES users(id::varchar);
    `);

    await client.query('COMMIT');
    console.log('Successfully updated ID column types');
    process.exit(0);
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error updating ID column types:', error);
    process.exit(1);
  } finally {
    client.release();
  }
}

fixIdTypes();