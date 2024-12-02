import axiosInstance from './intercapter/axiosInstance';

const BASE_URL = 'http://localhost:5000/auth';

export const register = async (data: { email: string; password: string; name: string }) => {
  try {
    const response = await axiosInstance.post(`${BASE_URL}/register`, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          throw new Error('Validation error: Please check the entered data.');
        case 409:
          throw new Error('User already exists.');
        case 500:
          throw new Error('Internal server error. Please try again later.');
        default:
          throw new Error('An unknown error occurred.');
      }
    }
    throw new Error('Network error. Please check your connection.');
  }
};

export const login = async (data: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post(`${BASE_URL}/login`, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          throw new Error('Invalid email or password.');
        case 500:
          throw new Error('Internal server error. Please try again later.');
        default:
          throw new Error('An unknown error occurred.');
      }
    }
    throw new Error('Network error. Please check your connection.');
  }
};

export const refreshToken = async (token: string) => {
  try {
    const response = await axiosInstance.post(`${BASE_URL}/refresh-token`, { token });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          throw new Error('Refresh token expired. Please log in again.');
        case 500:
          throw new Error('Internal server error. Please try again later.');
        default:
          throw new Error('An unknown error occurred.');
      }
    }
    throw new Error('Network error. Please check your connection.');
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post(`${BASE_URL}/logout`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 500:
          throw new Error('Internal server error. Please try again later.');
        default:
          throw new Error('An unknown error occurred.');
      }
    }
    throw new Error('Network error. Please check your connection.');
  }
};
