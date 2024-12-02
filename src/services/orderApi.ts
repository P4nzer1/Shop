import axios from 'axios';

const BASE_URL = 'http://localhost:5000/orders';

export const createOrder = async (orderData: any) => {
  const response = await axios.post(`${BASE_URL}`, orderData);
  return response.data;
};

export const getOrders = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};

export const getOrderById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const cancelOrder = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
