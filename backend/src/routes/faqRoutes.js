const express = require('express');
const router = express.Router();
const {
  getFaqs,
  createFaq,
  updateFaq,
  deleteFaq
} = require('../controllers/faqController');
const verifyJWT = require('../middlewares/verifyJWT');

router.get('/', getFaqs);
router.post('/', verifyJWT, createFaq);
router.put('/:id', verifyJWT, updateFaq);
router.delete('/:id', verifyJWT, deleteFaq);

module.exports = router;
