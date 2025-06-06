import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const getAbout = () => axios.get(`${API_BASE}/about/`);
export const getProjects = () => axios.get(`${API_BASE}/projects/`);
export const postContact = (data) => axios.post(`${API_BASE}/contact/`, data);
