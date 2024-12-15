import axios from 'axios';
import { PROFILE_URL } from '../../../shared/api/constants';

export const getProfile = async () => {
  const response = await axios.get(`${PROFILE_URL}`);
  return response.data;
};

export const updateProfile = async (profileData: any) => {
  const response = await axios.put(`${PROFILE_URL}`, profileData);
  return response.data;
};
