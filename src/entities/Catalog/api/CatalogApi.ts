import axios from 'axios';

const BASE_URL = 'http://localhost:5000/products';

export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const createProduct = async (productData: any) => {
  const response = await axios.post(`${BASE_URL}`, productData);
  return response.data;
};
