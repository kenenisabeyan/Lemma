const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const corsOptions = require('./src/config/corsOptions');
const errorHandler = require('./src/middlewares/errorHandler');

const authRoutes = require('./src/routes/authRoutes');
const projectRoutes = require('./src/routes/projectRoutes');
const servicesRoutes = require('./src/routes/servicesRoutes');
const insightsRoutes = require('./src/routes/insightsRoutes');
const testimonialsRoutes = require('./src/routes/testimonialsRoutes');
const contactRoutes = require('./src/routes/contactRoutes');
const settingsRoutes = require('./src/routes/settingsRoutes');
const resourceRoutes = require('./src/routes/resourceRoutes');
const faqRoutes = require('./src/routes/faqRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parsing Middlewares
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Static uploads directory serving
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Structural Engineering API'
  });
});

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/insights', insightsRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/faqs', faqRoutes);

// Global 404 Route
app.use('*', (req, res) => {
  res.status(404).json({ success: false, message: 'Resource API endpoint not found' });
});

// Global Error Handling Middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[Structural Engineering Server] Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
