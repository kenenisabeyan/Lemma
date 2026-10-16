const prisma = require('../config/db');

const getFaqs = async (req, res, next) => {
  try {
    const { category } = req.query;
    const where = {};
    if (category && category !== 'All') {
      where.category = category;
    }
    const faqs = await prisma.faq.findMany({
      where,
      orderBy: { order: 'asc' }
    });
    res.json({ success: true, faqs });
  } catch (err) {
    next(err);
  }
};

const createFaq = async (req, res, next) => {
  try {
    const data = req.body;
    if (data.order !== undefined) data.order = Number(data.order);
    const faq = await prisma.faq.create({ data });
    res.status(201).json({ success: true, faq });
  } catch (err) {
    next(err);
  }
};

const updateFaq = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = { ...req.body };
    if (data.order !== undefined) data.order = Number(data.order);
    const faq = await prisma.faq.update({ where: { id }, data });
    res.json({ success: true, faq });
  } catch (err) {
    next(err);
  }
};

const deleteFaq = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.faq.delete({ where: { id } });
    res.json({ success: true, message: 'FAQ deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getFaqs,
  createFaq,
  updateFaq,
  deleteFaq
};
