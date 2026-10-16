const express = require('express');
const router = express.Router();
const { getInsights, getInsightBySlug, createInsight, updateInsight, deleteInsight } = require('../controllers/insightsController');
const verifyJWT = require('../middlewares/verifyJWT');
const upload = require('../middlewares/upload');

router.get('/', getInsights);
router.get('/:slug', getInsightBySlug);
router.post('/', verifyJWT, upload.single('image'), createInsight);
router.put('/:id', verifyJWT, upload.single('image'), updateInsight);
router.delete('/:id', verifyJWT, deleteInsight);

module.exports = router;
