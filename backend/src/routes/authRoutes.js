const express = require('express');
const router = express.Router();
const { login, getMe, register } = require('../controllers/authController');
const verifyJWT = require('../middlewares/verifyJWT');

router.post('/login', login);
router.post('/register', register);
router.get('/me', verifyJWT, getMe);

module.exports = router;
