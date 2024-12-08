import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

// Импорт редьюсеров
import authReducer from '../features/Auth/model/authSlice';
import cartReducer from '../entities/Cart/model/cartSlice';
import profileReducer from '../entities/Profile/model/ProfileSlice';
import catalogReducer from '../entities/Catalog/model/CatalogSlice';
import orderReducer from '../features/Orders/model/ordersSlice';

// Импорт саг
import authSaga from '../features/Auth/model/authSaga';
import cartSaga from '../entities/Cart/model/cartSaga';
import profileSaga from '../entities/Profile/model/ProfileSaga';
import catalogSaga from '../entities/Catalog/model/CatalogSaga';
import orderSaga from '../features/Orders/model/ordersSaga';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    profile: profileReducer,
    catalog: catalogReducer,
    order: orderReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Корневая сага
function* rootSaga() {
  yield all([authSaga(), cartSaga(), profileSaga(), catalogSaga(), orderSaga()]);
}

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
