const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Unauthorized - Token Missing' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET || 'structural_engineering_super_secret_jwt_key_2026', (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Forbidden - Invalid or Expired Token' });
    }
    req.user = decoded;
    next();
  });
};

module.exports = verifyJWT;
