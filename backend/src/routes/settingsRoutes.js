const express = require('express');
const router = express.Router();
const { getSettings, updateSettings } = require('../controllers/settingsController');
const verifyJWT = require('../middlewares/verifyJWT');
const upload = require('../middlewares/upload');

router.get('/', getSettings);
router.put('/', verifyJWT, upload.single('video'), updateSettings);

module.exports = router;
