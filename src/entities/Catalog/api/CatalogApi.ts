import axios from 'axios';
import { PRODUCTS_URL } from '../../../shared/api/constants';

export const getProducts = async (brand: string | null) => {
  const url = brand ? `${PRODUCTS_URL}?brand=${brand}` : PRODUCTS_URL;
  const response = await axios.get(url);
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await axios.get(`${PRODUCTS_URL}/${id}`);
  return response.data;
};

export const createProduct = async (productData: any) => {
  const response = await axios.post(`${PRODUCTS_URL}`, productData);
  return response.data;
};
