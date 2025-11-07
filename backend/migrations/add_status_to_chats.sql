-- Add status column to chats table
ALTER TABLE chats 
ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'waiting';

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_chats_status ON chats(status);

-- Update existing rows to have 'waiting' status if NULL
UPDATE chats SET status = 'waiting' WHERE status IS NULL;