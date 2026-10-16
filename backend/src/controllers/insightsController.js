const prisma = require('../config/db');

const getInsights = async (req, res, next) => {
  try {
    const insights = await prisma.insight.findMany({
      orderBy: { publishedAt: 'desc' }
    });
    res.json({ success: true, insights });
  } catch (err) {
    next(err);
  }
};

const getInsightBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const insight = await prisma.insight.findUnique({ where: { slug } });
    if (!insight) {
      return res.status(404).json({ success: false, message: 'Insight article not found' });
    }
    res.json({ success: true, insight });
  } catch (err) {
    next(err);
  }
};

const createInsight = async (req, res, next) => {
  try {
    const data = req.body;
    if (!data.slug) {
      data.slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }
    if (req.file) {
      data.imageUrl = `/uploads/${req.file.filename}`;
    }
    const insight = await prisma.insight.create({ data });
    res.status(201).json({ success: true, insight });
  } catch (err) {
    next(err);
  }
};

const updateInsight = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = { ...req.body };
    if (req.file) {
      data.imageUrl = `/uploads/${req.file.filename}`;
    }
    const insight = await prisma.insight.update({ where: { id }, data });
    res.json({ success: true, insight });
  } catch (err) {
    next(err);
  }
};

const deleteInsight = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.insight.delete({ where: { id } });
    res.json({ success: true, message: 'Insight deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getInsights, getInsightBySlug, createInsight, updateInsight, deleteInsight };
