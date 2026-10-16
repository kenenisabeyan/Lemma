const prisma = require('../config/db');

const getProjects = async (req, res, next) => {
  try {
    const { category, featured, search } = req.query;

    const where = {};
    if (category && category !== 'All') {
      where.category = category;
    }
    if (featured === 'true') {
      where.isFeatured = true;
    }
    if (search) {
      where.OR = [
        { title: { contains: search } },
        { description: { contains: search } },
        { location: { contains: search } },
        { structuralSystem: { contains: search } }
      ];
    }

    const projects = await prisma.project.findMany({
      where,
      orderBy: { order: 'asc' }
    });

    res.json({ success: true, projects });
  } catch (err) {
    next(err);
  }
};

const getProjectBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const project = await prisma.project.findUnique({
      where: { slug }
    });

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    res.json({ success: true, project });
  } catch (err) {
    next(err);
  }
};

const createProject = async (req, res, next) => {
  try {
    const data = req.body;

    if (!data.slug) {
      data.slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    if (typeof data.softwareUsed === 'object') {
      data.softwareUsed = JSON.stringify(data.softwareUsed);
    }

    if (req.file) {
      data.imageUrl = `/uploads/${req.file.filename}`;
    }

    const project = await prisma.project.create({ data });
    res.status(201).json({ success: true, project });
  } catch (err) {
    next(err);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = { ...req.body };

    if (data.softwareUsed && typeof data.softwareUsed === 'object') {
      data.softwareUsed = JSON.stringify(data.softwareUsed);
    }

    if (req.file) {
      data.imageUrl = `/uploads/${req.file.filename}`;
    }

    // Convert booleans if passed as strings
    if (data.isFeatured !== undefined) data.isFeatured = data.isFeatured === true || data.isFeatured === 'true';
    if (data.isPublic !== undefined) data.isPublic = data.isPublic === true || data.isPublic === 'true';

    const project = await prisma.project.update({
      where: { id },
      data
    });

    res.json({ success: true, project });
  } catch (err) {
    next(err);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.project.delete({ where: { id } });
    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject
};
