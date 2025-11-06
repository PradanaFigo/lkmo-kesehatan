const express = require('express');
const router = express.Router();
const authorizeRoles = require('../middleware/role.middleware');
const User = require('../models/User');

// GET /api/admin/users → lihat semua user (hanya admin)
router.get('/users', authorizeRoles('admin'), async (req, res) => {
  try {
    const users = await User.findAll(); // tambahkan fungsi ini di model
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/admin/promote → jadikan dokter (hanya admin)
router.post('/promote', authorizeRoles('admin'), async (req, res) => {
  try {
    const { userId } = req.body;
    const result = await User.updateRole(userId, 'dokter');
    res.json({ message: 'User berhasil dijadikan dokter', user: result });
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengupdate role' });
  }
});

module.exports = router;