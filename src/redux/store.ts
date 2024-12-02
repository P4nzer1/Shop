import { configureStore } from '@reduxjs/toolkit';
// Импортируйте ваши редюсеры здесь
import authReducer from '../features/Auth/authSlice';



const store = configureStore({
  reducer: {
    auth: authReducer, // Редюсер для управления авторизацией
     // Редюсер для управления корзиной
  },
});

// Экспортируем тип корневого состояния и dispatch

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
