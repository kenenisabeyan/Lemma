const prisma = require('../config/db');

const getResources = async (req, res, next) => {
  try {
    const { category, search } = req.query;
    const where = {};
    if (category && category !== 'All') {
      where.category = category;
    }
    if (search) {
      where.OR = [
        { title: { contains: search } },
        { description: { contains: search } }
      ];
    }
    const resources = await prisma.resource.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    });
    res.json({ success: true, resources });
  } catch (err) {
    next(err);
  }
};

const createResource = async (req, res, next) => {
  try {
    const data = req.body;
    if (req.file) {
      data.fileUrl = `/uploads/${req.file.filename}`;
    }
    const resource = await prisma.resource.create({ data });
    res.status(201).json({ success: true, resource });
  } catch (err) {
    next(err);
  }
};

const updateResource = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = { ...req.body };
    if (req.file) {
      data.fileUrl = `/uploads/${req.file.filename}`;
    }
    const resource = await prisma.resource.update({ where: { id }, data });
    res.json({ success: true, resource });
  } catch (err) {
    next(err);
  }
};

const deleteResource = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.resource.delete({ where: { id } });
    res.json({ success: true, message: 'Resource removed successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getResources,
  createResource,
  updateResource,
  deleteResource
};
