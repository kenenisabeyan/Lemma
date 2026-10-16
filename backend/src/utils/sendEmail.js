const sendNotificationEmail = async ({ to, subject, body }) => {
  // Log notification in development mode or integrate with Nodemailer/SendGrid in production
  console.log(`[Email Notification Log] To: ${to} | Subject: ${subject}`);
  console.log(`[Body]:\n${body}\n---`);
  return { success: true, message: 'Notification logged' };
};

module.exports = { sendNotificationEmail };
