// utils/jwt.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
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