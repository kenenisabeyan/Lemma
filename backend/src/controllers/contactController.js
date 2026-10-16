const prisma = require('../config/db');
const { sendNotificationEmail } = require('../utils/sendEmail');

const submitInquiry = async (req, res, next) => {
  try {
    const { name, email, phone, projectType, subject, message } = req.body;

    if (!name || !email || !projectType || !message) {
      return res.status(400).json({ success: false, message: 'Required fields missing: Name, Email, Project Type, and Message are required.' });
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        phone: phone || '',
        projectType,
        subject: subject || 'Structural Engineering Consultation Inquiry',
        message,
        status: 'NEW'
      }
    });

    // Notify engineer via email log helper
    await sendNotificationEmail({
      to: process.env.NOTIFICATION_EMAIL || 'consult@alexandre-structural.com',
      subject: `[New Structural Inquiry] ${projectType} - ${name}`,
      body: `Client: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nProject Type: ${projectType}\nSubject: ${subject}\n\nMessage:\n${message}`
    });

    res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully. We will review your project requirements and respond promptly.',
      inquiryId: inquiry.id
    });
  } catch (err) {
    next(err);
  }
};

const getInquiries = async (req, res, next) => {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json({ success: true, inquiries });
  } catch (err) {
    next(err);
  }
};

const updateInquiryStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // NEW, IN_REVIEW, RESPONDED

    const inquiry = await prisma.inquiry.update({
      where: { id },
      data: { status }
    });

    res.json({ success: true, inquiry });
  } catch (err) {
    next(err);
  }
};

const deleteInquiry = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.inquiry.delete({ where: { id } });
    res.json({ success: true, message: 'Inquiry removed' });
  } catch (err) {
    next(err);
  }
};

module.exports = { submitInquiry, getInquiries, updateInquiryStatus, deleteInquiry };
