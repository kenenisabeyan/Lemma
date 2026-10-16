const express = require('express');
const router = express.Router();
const { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialsController');
const verifyJWT = require('../middlewares/verifyJWT');
const upload = require('../middlewares/upload');

router.get('/', getTestimonials);
router.post('/', verifyJWT, upload.single('avatar'), createTestimonial);
router.put('/:id', verifyJWT, upload.single('avatar'), updateTestimonial);
router.delete('/:id', verifyJWT, deleteTestimonial);

module.exports = router;
