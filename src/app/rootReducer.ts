import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../entities/Cart/model/cartSlice';
import profileReducer from '../entities/Profile/model/ProfileSlice';
import authReducer from '../features/Auth/model/authSlice';
import catalogReducer from '../entities/Catalog/model/CatalogSlice';
import orderReducer from '../features/Orders/model/ordersSlice';
import filterReducer from '../entities/Filter/model/FilterSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  profile: profileReducer,
  auth: authReducer, 
  catalog: catalogReducer,
  order: orderReducer,
  filters: filterReducer,
});

export default rootReducer;
