const express = require('express');
const router = express.Router();
const Queue = require('../models/Queue');
const pool = require('../config/db');

// GET /api/queue/status - Get queue status for a patient
router.get('/status', async (req, res) => {
  try {
    const patientId = req.user.id;
    const doctorId = req.query.doctorId;

    if (!doctorId) {
      return res.status(400).json({ error: 'Doctor ID is required' });
    }

    const position = await Queue.getPosition(patientId, doctorId);
    if (position === null) {
      return res.status(404).json({ error: 'Not in queue' });
    }

    res.json({ position, estimatedWaitTime: position * 15 }); // Asumsi 15 menit per pasien
  } catch (error) {
    console.error('Error getting queue status:', error);
    res.status(500).json({ error: 'Failed to get queue status' });
  }
});

// GET /api/queue/doctor - Get queue for a doctor
router.get('/doctor', async (req, res) => {
  try {
    console.log('Doctor Queue Request - Auth User:', req.user);
    const doctorId = parseInt(req.user?.id);
    
    if (!doctorId || isNaN(doctorId)) {
      console.log('No valid doctor ID found in request');
      return res.status(401).json({ error: 'User ID tidak ditemukan atau tidak valid' });
    }

    // Verify that we have a database connection
    const testConn = await pool.query('SELECT NOW()');
    if (!testConn) {
      console.error('Database connection failed');
      return res.status(500).json({ error: 'Database connection error' });
    }

    const query = `
      SELECT 
        DISTINCT ON (c.sender_id)
        c.id,
        c.sender_id as patient_id,
        'normal' as priority,
        CASE 
          WHEN EXISTS (
            SELECT 1 FROM chats c2 
            WHERE c2.sender_id = c.sender_id 
            AND c2.receiver_id = c.receiver_id 
            AND c2.status = 'ongoing'
          ) THEN 'active'
          ELSE 'waiting'
        END as status,
        c.created_at as queue_time,
        u.username as patient_username,
        u.full_name as patient_name
      FROM chats c
      LEFT JOIN users u ON c.sender_id::text = u.id::text
      WHERE c.receiver_id::text = $1::text 
        AND (c.status = 'waiting' OR c.status = 'ongoing')
      ORDER BY 
        c.sender_id,
        CASE 
          WHEN c.status = 'ongoing' THEN 1
          ELSE 2
        END,
        c.created_at ASC
    `;
    
    console.log('Executing queue query for doctor:', doctorId);
    const result = await pool.query(query, [doctorId]);
    console.log('Queue query result rows:', result.rows.length);
    res.json(result.rows);
  } catch (error) {
    console.error('Error getting doctor queue:', {
      error: error.message,
      stack: error.stack,
      user: req.user
    });
    res.status(500).json({ 
      error: 'Failed to get queue',
      details: error.message 
    });
  }
});

// POST /api/queue/join - Join the queue
router.post('/join', async (req, res) => {
  try {
    const patientId = req.user.id;
    const { doctorId, priority = 'normal' } = req.body;

    if (!doctorId) {
      return res.status(400).json({ error: 'Doctor ID is required' });
    }

    const queueEntry = await Queue.enqueue(patientId, doctorId, priority);
    res.status(201).json(queueEntry);
  } catch (error) {
    console.error('Error joining queue:', error);
    res.status(500).json({ error: 'Failed to join queue' });
  }
});

// POST /api/queue/next - Get next patient from queue
router.post('/next', async (req, res) => {
  try {
    const doctorId = req.user.id;
    const nextPatient = await Queue.dequeue(doctorId);
    
    if (!nextPatient) {
      return res.json({ message: 'No patients in queue' });
    }

    res.json(nextPatient);
  } catch (error) {
    console.error('Error getting next patient:', error);
    res.status(500).json({ error: 'Failed to get next patient' });
  }
});

// POST /api/queue/complete - Complete current consultation
router.post('/complete', async (req, res) => {
  try {
    const doctorId = req.user.id;
    const { patientId } = req.body;

    if (!patientId) {
      return res.status(400).json({ error: 'Patient ID is required' });
    }

    const completedSession = await Queue.complete(patientId, doctorId);
    res.json(completedSession);
  } catch (error) {
    console.error('Error completing consultation:', error);
    res.status(500).json({ error: 'Failed to complete consultation' });
  }
});

module.exports = router;