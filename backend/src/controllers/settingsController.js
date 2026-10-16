const prisma = require('../config/db');

const getSettings = async (req, res, next) => {
  try {
    let settings = await prisma.siteSettings.findUnique({ where: { id: 'default' } });
    if (!settings) {
      settings = await prisma.siteSettings.create({
        data: { id: 'default' }
      });
    }
    res.json({ success: true, settings });
  } catch (err) {
    next(err);
  }
};

const updateSettings = async (req, res, next) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      data.introVideoUrl = `/uploads/${req.file.filename}`;
    }

    const settings = await prisma.siteSettings.upsert({
      where: { id: 'default' },
      update: data,
      create: { id: 'default', ...data }
    });

    res.json({ success: true, settings });
  } catch (err) {
    next(err);
  }
};

module.exports = { getSettings, updateSettings };
