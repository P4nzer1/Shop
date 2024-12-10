import axios from 'axios';

const BASE_URL = 'http://localhost:5000/products';

export const getProducts = async (brand: string | null) => {
  const url = brand ? `${BASE_URL}?brand=${brand}` : BASE_URL;
  const response = await axios.get(url);
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
// создать на бэке
export const getBrands = async () => {
  const response = await axios.get(`${BASE_URL}/brands`);
  return response.data;
};
