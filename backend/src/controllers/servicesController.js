const prisma = require('../config/db');

const getServices = async (req, res, next) => {
  try {
    const services = await prisma.service.findMany({
      orderBy: { order: 'asc' }
    });
    res.json({ success: true, services });
  } catch (err) {
    next(err);
  }
};

const createService = async (req, res, next) => {
  try {
    const data = req.body;
    if (typeof data.features === 'object') {
      data.features = JSON.stringify(data.features);
    }
    const service = await prisma.service.create({ data });
    res.status(201).json({ success: true, service });
  } catch (err) {
    next(err);
  }
};

const updateService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (data.features && typeof data.features === 'object') {
      data.features = JSON.stringify(data.features);
    }
    const service = await prisma.service.update({ where: { id }, data });
    res.json({ success: true, service });
  } catch (err) {
    next(err);
  }
};

const deleteService = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.service.delete({ where: { id } });
    res.json({ success: true, message: 'Service deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getServices, createService, updateService, deleteService };
