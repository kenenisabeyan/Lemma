const prisma = require('../config/db');

const getTestimonials = async (req, res, next) => {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { order: 'asc' }
    });
    res.json({ success: true, testimonials });
  } catch (err) {
    next(err);
  }
};

const createTestimonial = async (req, res, next) => {
  try {
    const data = req.body;
    if (req.file) {
      data.avatarUrl = `/uploads/${req.file.filename}`;
    }
    const testimonial = await prisma.testimonial.create({ data });
    res.status(201).json({ success: true, testimonial });
  } catch (err) {
    next(err);
  }
};

const updateTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = { ...req.body };
    if (req.file) {
      data.avatarUrl = `/uploads/${req.file.filename}`;
    }
    const testimonial = await prisma.testimonial.update({ where: { id }, data });
    res.json({ success: true, testimonial });
  } catch (err) {
    next(err);
  }
};

const deleteTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.testimonial.delete({ where: { id } });
    res.json({ success: true, message: 'Testimonial deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial };
