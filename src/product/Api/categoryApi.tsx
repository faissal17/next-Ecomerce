import axios from 'axios';

const categoryApi = axios.create({
  baseURL: 'http://localhost:3001/api/',
  timeout: 5000,
});

export const getAllCategori = async () => {
  try {
    const response = await categoryApi.get('categories');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

