import axios from 'axios';
import { ORDERS_URL } from '../../../shared/api/constants';

export const createOrder = async (orderData: any) => {
  const response = await axios.post(`${ORDERS_URL}`, orderData);
  return response.data;
};

export const getOrders = async () => {
  const response = await axios.get(`${ORDERS_URL}`);
  return response.data;
};

export const getOrderById = async (id: string) => {
  const response = await axios.get(`${ORDERS_URL}/${id}`);
  return response.data;
};

export const cancelOrder = async (id: string) => {
  const response = await axios.delete(`${ORDERS_URL}/${id}`);
  return response.data;
};
