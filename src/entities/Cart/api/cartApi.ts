import axios from 'axios';
import { CART_URL } from '../../../shared/api/constants';



export const getCart = async () => {
  const response = await axios.get(`${CART_URL}`);
  return response.data;
};

export const addToCart = async (item: { productId: string; quantity: number }) => {
  const response = await axios.post(`${CART_URL}`, item);
  return response.data;
};

export const updateCart = async (item: { productId: string; quantity: number }) => {
  const response = await axios.put(`${CART_URL}`, item);
  return response.data;
};

export const clearCart = async () => {
  const response = await axios.delete(`${CART_URL}`);
  return response.data;
};

export const removeCartItem = async (itemId: string) => {
  const response = await axios.delete(`${CART_URL}/${itemId}`);
  return response.data;
}; //добавить на беке
