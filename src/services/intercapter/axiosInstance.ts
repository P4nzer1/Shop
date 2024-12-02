import axios from 'axios';
import store from '../../redux/store'; 
import { RootState } from '../../redux/store'; // Убедитесь, что RootState корректно импортирован
import { refreshTokenSuccess, refreshTokenFailure } from '../../features/Auth/authSlice';

const BASE_URL = 'http://localhost:5000'; 

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response, // Возвращаем успешный ответ как есть
  async (error) => {
    const originalRequest = error.config;

    // Проверяем, если ошибка 401 и токен истёк
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Отметка, чтобы избежать зацикливания

      const refreshToken = (store.getState() as RootState).auth.refreshToken;

      if (refreshToken) {
        try {
          // Создаем запрос на обновление токена вручную
          const response = await axios.post(`${BASE_URL}/auth/refresh-token`, { token: refreshToken });

          // Обновляем токены в состоянии
          store.dispatch(refreshTokenSuccess({
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
          }));

          // Обновляем Authorization заголовок для повторного запроса
          axiosInstance.defaults.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
          originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`;

          // Повторяем запрос с обновлённым токеном
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error('Unable to refresh token:', refreshError);

          // Если обновление токена не удалось, диспатчим ошибку
          store.dispatch(refreshTokenFailure('Session expired. Please login again.'));
        }
      }
    }

    return Promise.reject(error); // Пробрасываем ошибку дальше, если не удалось обновить токен
  }
);

export default axiosInstance;
