import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

// Импорт редьюсеров
import authReducer from '../features/Auth/model/authSlice';
import cartReducer from '../entities/Cart/model/cartSlice';
import profileReducer from '../entities/Profile/model/ProfileSlice';

// Импорт саг
import { authSaga } from '../features/Auth/model/authSaga';
import cartSaga from '../entities/Cart/model/cartSaga';
import profileSaga from '../entities/Profile/model/ProfileSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Корневая сага
function* rootSaga() {
  yield all([authSaga(), cartSaga(), profileSaga()]);
}

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
