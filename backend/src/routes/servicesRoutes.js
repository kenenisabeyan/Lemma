const express = require('express');
const router = express.Router();
const { getServices, createService, updateService, deleteService } = require('../controllers/servicesController');
const verifyJWT = require('../middlewares/verifyJWT');

router.get('/', getServices);
router.post('/', verifyJWT, createService);
router.put('/:id', verifyJWT, updateService);
router.delete('/:id', verifyJWT, deleteService);

module.exports = router;
