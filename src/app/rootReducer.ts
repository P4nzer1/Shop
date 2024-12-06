import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../entities/Cart/model/cartSlice';
import profileReducer from '../entities/Profile/model/ProfileSlice';
import authReducer from '../features/Auth/model/authSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  profile: profileReducer,
  auth: authReducer, // Подключаем авторизацию
});

export default rootReducer;
