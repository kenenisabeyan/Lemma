import axios from 'axios';

// Detect API base URL from Vite environment variables (for Vercel -> Render cross-domain deployment)
// Falls back to local same-origin '/api' (proxy in Vite dev / Vercel rewrites)
const rawBaseURL = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || '/api';
let resolvedBaseURL = rawBaseURL.trim();

// Normalize URL: If an absolute URL is provided without an '/api' path, append '/api'
if (resolvedBaseURL.startsWith('http://') || resolvedBaseURL.startsWith('https://')) {
  resolvedBaseURL = resolvedBaseURL.replace(/\/+$/, '');
  if (!resolvedBaseURL.endsWith('/api')) {
    resolvedBaseURL = `${resolvedBaseURL}/api`;
  }
}

const api = axios.create({
  baseURL: resolvedBaseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('engineering_auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('engineering_auth_token');
    }
    return Promise.reject(error);
  }
);

export default api;
