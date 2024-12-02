import axios from 'axios';

const BASE_URL = 'http://localhost:5000/profile';

export const getProfile = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};

export const updateProfile = async (profileData: any) => {
  const response = await axios.put(`${BASE_URL}`, profileData);
  return response.data;
};
