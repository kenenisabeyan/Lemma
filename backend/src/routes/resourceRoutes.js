const express = require('express');
const router = express.Router();
const {
  getResources,
  createResource,
  updateResource,
  deleteResource
} = require('../controllers/resourceController');
const verifyJWT = require('../middlewares/verifyJWT');
const upload = require('../middlewares/upload');

router.get('/', getResources);
router.post('/', verifyJWT, upload.single('file'), createResource);
router.put('/:id', verifyJWT, upload.single('file'), updateResource);
router.delete('/:id', verifyJWT, deleteResource);

module.exports = router;
