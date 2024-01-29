import axios from 'axios';

const productApi = axios.create({
  baseURL: 'http://localhost:3001/api/',
  timeout: 5000,
});

export const GetAllProducts = async () => {
  try {
    const response = await productApi.get('products');
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
