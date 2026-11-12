// Parse allowed origins from environment variable (supports comma-separated list)
const envOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim().replace(/\/+$/, ''))
  .filter(Boolean);

const defaultOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173'
];

const allowedOrigins = [...new Set([...defaultOrigins, ...envOrigins])];

const corsOptions = {
  origin: (origin, callback) => {
    // 1. Allow requests with no origin (e.g. server-to-server, curl, Postman, health checks)
    if (!origin) {
      return callback(null, true);
    }

    const normalizedOrigin = origin.replace(/\/+$/, '');

    // 2. Allow wildcard if specified in CORS_ORIGIN
    if (process.env.CORS_ORIGIN === '*' || allowedOrigins.includes('*')) {
      return callback(null, true);
    }

    // 3. Exact match against configured origins
    if (allowedOrigins.indexOf(normalizedOrigin) !== -1) {
      return callback(null, true);
    }

    try {
      const parsedUrl = new URL(normalizedOrigin);
      const hostname = parsedUrl.hostname;

      // 4. Automatically allow all Vercel deployments (*.vercel.app)
      if (hostname === 'vercel.app' || hostname.endsWith('.vercel.app')) {
        return callback(null, true);
      }

      // 5. Automatically allow Render domains (*.onrender.com)
      if (hostname === 'onrender.com' || hostname.endsWith('.onrender.com')) {
        return callback(null, true);
      }
    } catch {
      // If URL parsing fails, continue to denial
    }

    return callback(new Error(`CORS policy blocked access from origin: ${origin}`));
  },
  credentials: true,
  optionsSuccessStatus: 200
};

module.exports = corsOptions;
