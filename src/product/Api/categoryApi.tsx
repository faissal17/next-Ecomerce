import axios from 'axios';

const categoryApi = axios.create({
  baseURL: 'http://localhost:3001/api/',
  timeout: 5000,
});

export const getAllCategoriies = async () => {
  try {
    const response = await categoryApi.get('categories');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

