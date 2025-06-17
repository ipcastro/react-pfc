import axios from 'axios';
import { mockPersonagens, mockConteudo } from './mockData';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Ajuste para a URL do seu backend
});

export const getPersonagens = async () => {
  try {
    const response = await api.get('/api/personagens');
    return response.data;
  } catch (error) {
    console.warn('Usando dados mock para personagens');
    return mockPersonagens;
  }
};

export const getConteudo = async () => {
  try {
    const response = await api.get('/api/conteudo');
    return response.data;
  } catch (error) {
    console.warn('Usando dados mock para conteúdo');
    return mockConteudo;
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post('/api/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const cadastrar = async (userData) => {
  try {
    const response = await api.post('/api/auth/cadastro', userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    throw error;
  }
};

export const enviarContato = async (contatoData) => {
  try {
    const response = await api.post('/api/contato', contatoData);
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar contato:', error);
    throw error;
  }
};

export default api; 