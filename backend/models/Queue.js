const pool = require('../config/db');

class Queue {
  // Menambahkan pasien ke antrian
  static async enqueue(patientId, doctorId, priority = 'normal') {
    const query = `
      INSERT INTO chat_queue (patient_id, doctor_id, priority, status, queue_time)
      VALUES ($1, $2, $3, 'waiting', NOW())
      RETURNING id, patient_id, doctor_id, priority, status, queue_time
    `;
    const values = [patientId, doctorId, priority];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  // Mengambil pasien berikutnya dari antrian
  static async dequeue(doctorId) {
    // Gunakan transaction untuk memastikan concurrent safety
    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      // Ambil pasien dengan prioritas tertinggi dan waktu tunggu terlama
      const query = `
        UPDATE chat_queue 
        SET status = 'active'
        WHERE id = (
          SELECT id 
          FROM chat_queue 
          WHERE doctor_id = $1 AND status = 'waiting'
          ORDER BY 
            CASE priority
              WHEN 'high' THEN 1
              WHEN 'normal' THEN 2
              ELSE 3
            END,
            queue_time ASC
          LIMIT 1
        )
        RETURNING *
      `;
      const result = await client.query(query, [doctorId]);
      await client.query('COMMIT');
      
      return result.rows[0];
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  // Mendapatkan posisi antrian untuk pasien
  static async getPosition(patientId, doctorId) {
    const query = `
      WITH queue_position AS (
        SELECT 
          id,
          ROW_NUMBER() OVER (
            ORDER BY 
              CASE priority
                WHEN 'high' THEN 1
                WHEN 'normal' THEN 2
                ELSE 3
              END,
              queue_time ASC
          ) as position
        FROM chat_queue
        WHERE doctor_id = $1 AND status = 'waiting'
      )
      SELECT position 
      FROM queue_position 
      WHERE id IN (
        SELECT id FROM chat_queue 
        WHERE patient_id = $2 AND doctor_id = $1 AND status = 'waiting'
      )
    `;
    const result = await pool.query(query, [doctorId, patientId]);
    return result.rows[0]?.position || null;
  }

  // Mendapatkan semua antrian untuk dokter tertentu
  static async getQueueByDoctor(doctorId) {
    const query = `
      SELECT 
        cq.*,
        u.full_name as patient_name,
        u.gender as patient_gender,
        u.age as patient_age
      FROM chat_queue cq
      JOIN users u ON u.id = cq.patient_id::text
      WHERE cq.doctor_id = $1 AND cq.status = 'waiting'
      ORDER BY 
        CASE cq.priority
          WHEN 'high' THEN 1
          WHEN 'normal' THEN 2
          ELSE 3
        END,
        cq.queue_time ASC
    `;
    const result = await pool.query(query, [doctorId]);
    return result.rows;
  }

  // Selesaikan sesi chat
  static async complete(patientId, doctorId) {
    const query = `
      UPDATE chat_queue
      SET status = 'completed', completed_time = NOW()
      WHERE patient_id = $1 AND doctor_id = $2 AND status = 'active'
      RETURNING *
    `;
    const result = await pool.query(query, [patientId, doctorId]);
    return result.rows[0];
  }
}