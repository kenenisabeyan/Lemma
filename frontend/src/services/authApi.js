import api from './api';

export const loginAdmin = async (credentials) => {
  const res = await api.post('/auth/login', credentials);
  return res.data;
};

export const fetchCurrentUser = async () => {
  const res = await api.get('/auth/me');
  return res.data;
};
