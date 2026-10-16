import api from './api';

export const fetchProjects = async (params = {}) => {
  const res = await api.get('/projects', { params });
  return res.data;
};

export const fetchProjectBySlug = async (slug) => {
  const res = await api.get(`/projects/${slug}`);
  return res.data;
};

export const createProject = async (formData) => {
  const isMultipart = formData instanceof FormData;
  const res = await api.post('/projects', formData, {
    headers: isMultipart ? { 'Content-Type': 'multipart/form-data' } : {}
  });
  return res.data;
};

export const updateProject = async (id, formData) => {
  const isMultipart = formData instanceof FormData;
  const res = await api.put(`/projects/${id}`, formData, {
    headers: isMultipart ? { 'Content-Type': 'multipart/form-data' } : {}
  });
  return res.data;
};

export const deleteProject = async (id) => {
  const res = await api.delete(`/projects/${id}`);
  return res.data;
};
