import axios from 'axios';

const productApi = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

export const GetAllProducts = async () => {
  try {
    const response = await productApi.get('/');
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
