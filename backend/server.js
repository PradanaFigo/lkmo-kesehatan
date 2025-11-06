// backend/server.js
const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');

// Models
const pool = require('./config/db');
const User = require('./models/User');
const Chat = require('./models/Chat');

// Routes & Middleware
const authRoutes = require('./routes/auth.routes');
const chatRoutes = require('./routes/chat.routes');
const authenticateToken = require('./middleware/auth.middleware');

// Socket.IO
const socketIo = require('socket.io');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chats', authenticateToken, chatRoutes);

// Contoh route proteksi
app.get('/api/me', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: 'User tidak ditemukan' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Socket.IO Connection Handler
io.on('connection', (socket) => {
  console.log('✅ User connected:', socket.id);

  // Join room berdasarkan user ID
  socket.on('join', (userId) => {
    socket.join(userId);
    console.log(`📥 User ${userId} joined room`);
  });

  // Kirim pesan + simpan ke database
  socket.on('sendMessage', async (data) => {
    const { from, to, message } = data;

    if (!from || !to || !message) {
      console.warn('⚠️ Pesan tidak lengkap:', data);
      return;
    }

    try {
      // Simpan ke database
      const savedMessage = await Chat.create({ sender_id: from, receiver_id: to, message });
      console.log('💾 Pesan disimpan ke database:', savedMessage.id);
    } catch (err) {
      console.error('❌ Gagal simpan chat ke database:', err);
    }

    // Kirim ke penerima via Socket.IO
    io.to(to).emit('receiveMessage', {
      from,
      message,
      timestamp: new Date().toISOString()
    });

    console.log(`📨 Pesan dari ${from} ke ${to}:`, message);
  });

  socket.on('disconnect', () => {
    console.log('📴 User disconnected:', socket.id);
  });
});

app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT 1');
    res.json({ message: '✅ Backend & Database OK!' });
  } catch (err) {
    res.status(500).json({ error: '❌ Database error', details: err.message });
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
  console.log(`💬 Socket.IO siap digunakan`);
});