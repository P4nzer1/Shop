import axios from 'axios';

const BASE_URL = 'http://localhost:5000/cart';

export const getCart = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};

export const addToCart = async (item: { productId: string; quantity: number }) => {
  const response = await axios.post(`${BASE_URL}`, item);
  return response.data;
};

export const updateCart = async (item: { productId: string; quantity: number }) => {
  const response = await axios.put(`${BASE_URL}`, item);
  return response.data;
};

export const clearCart = async () => {
  const response = await axios.delete(`${BASE_URL}`);
  return response.data;
};
