// utils/jwt.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-please-change';
if (!process.env.JWT_SECRET) {
  console.warn('⚠️ WARNING: JWT_SECRET not set in environment. Using fallback development secret. Do NOT use this in production.');
}

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
};

const verifyPassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

const hashPassword = async (plainPassword) => {
  return await bcrypt.hash(plainPassword, 10);
};

module.exports = { generateToken, verifyPassword, hashPassword };