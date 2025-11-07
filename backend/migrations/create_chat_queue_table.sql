-- Create chat queue table
CREATE TABLE IF NOT EXISTS chat_queue (
    id SERIAL PRIMARY KEY,
    patient_id TEXT NOT NULL,
    doctor_id TEXT NOT NULL,
    priority VARCHAR(10) DEFAULT 'normal',
    status VARCHAR(20) DEFAULT 'waiting',
    queue_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    start_time TIMESTAMP,
    completed_time TIMESTAMP,
    
    CONSTRAINT valid_priority CHECK (priority IN ('high', 'normal', 'low')),
    CONSTRAINT valid_status CHECK (status IN ('waiting', 'active', 'completed', 'cancelled'))
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_chat_queue_doctor ON chat_queue(doctor_id, status);
CREATE INDEX IF NOT EXISTS idx_chat_queue_patient ON chat_queue(patient_id, status);

-- Add foreign key constraints (assuming users table exists)
ALTER TABLE chat_queue
ADD CONSTRAINT fk_patient
FOREIGN KEY (patient_id) REFERENCES users(id) ON DELETE CASCADE;

ALTER TABLE chat_queue
ADD CONSTRAINT fk_doctor
FOREIGN KEY (doctor_id) REFERENCES users(id) ON DELETE CASCADE;