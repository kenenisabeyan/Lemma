const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/projectController');
const verifyJWT = require('../middlewares/verifyJWT');
const upload = require('../middlewares/upload');

router.get('/', getProjects);
router.get('/:slug', getProjectBySlug);

router.post('/', verifyJWT, upload.single('image'), createProject);
router.put('/:id', verifyJWT, upload.single('image'), updateProject);
router.delete('/:id', verifyJWT, deleteProject);

module.exports = router;
