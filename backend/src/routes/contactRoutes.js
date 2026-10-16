const express = require('express');
const router = express.Router();
const { submitInquiry, getInquiries, updateInquiryStatus, deleteInquiry } = require('../controllers/contactController');
const verifyJWT = require('../middlewares/verifyJWT');

router.post('/', submitInquiry);
router.get('/', verifyJWT, getInquiries);
router.patch('/:id/status', verifyJWT, updateInquiryStatus);
router.delete('/:id', verifyJWT, deleteInquiry);

module.exports = router;
