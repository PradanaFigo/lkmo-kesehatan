// Proteksi berdasarkan role
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const user = req.user; // dari authenticateToken
    
    if (!user || !allowedRoles.includes(user.role)) {
      return res.status(403).json({ error: 'Akses ditolak: role tidak sesuai' });
    }
    
    next();
  };
};

module.exports = authorizeRoles;