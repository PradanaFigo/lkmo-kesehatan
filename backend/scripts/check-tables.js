// backend/scripts/check-tables.js
const pool = require('../config/db');

async function checkTables() {
  try {
    // Check chat_queue table
    const queueTable = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'chat_queue'
      );
    `);
    console.log('chat_queue table exists:', queueTable.rows[0].exists);

    if (queueTable.rows[0].exists) {
      const queueColumns = await pool.query(`
        SELECT column_name, data_type 
        FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'chat_queue';
      `);
      console.log('\nchat_queue columns:');
      queueColumns.rows.forEach(col => {
        console.log(`- ${col.column_name}: ${col.data_type}`);
      });
    }

    // Check chats table
    const chatsTable = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'chats'
      );
    `);
    console.log('\nchats table exists:', chatsTable.rows[0].exists);

    if (chatsTable.rows[0].exists) {
      const chatColumns = await pool.query(`
        SELECT column_name, data_type 
        FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'chats';
      `);
      console.log('\nchats columns:');
      chatColumns.rows.forEach(col => {
        console.log(`- ${col.column_name}: ${col.data_type}`);
      });
    }

    // Check users table
    const usersTable = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'users'
      );
    `);
    console.log('\nusers table exists:', usersTable.rows[0].exists);

    if (usersTable.rows[0].exists) {
      const userColumns = await pool.query(`
        SELECT column_name, data_type 
        FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'users';
      `);
      console.log('\nusers columns:');
      userColumns.rows.forEach(col => {
        console.log(`- ${col.column_name}: ${col.data_type}`);
      });
    }

    process.exit(0);
  } catch (error) {
    console.error('Error checking tables:', error);
    process.exit(1);
  }
}

checkTables();