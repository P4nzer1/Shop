import { call, put, takeLatest } from 'redux-saga/effects';
import { login, register, logout, refreshToken } from '../api/authApi';
import {
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  logout as logoutAction,
} from './authSlice';

function* handleRefreshToken(action: ReturnType<typeof refreshTokenRequest>) {
    try {
      const data = yield call(refreshToken, action.payload.token);
      yield put(refreshTokenSuccess({ accessToken: data.accessToken, refreshToken: data.refreshToken }));
      return data; // Возвращаем результат
    } catch (error: any) {
      yield put(refreshTokenFailure(error.response?.data?.message || 'Unable to refresh token'));
      throw error; // Выбрасываем ошибку для обработки
    }
  }

function* handleLogin(action: ReturnType<typeof loginRequest>) {
  try {
    const data = yield call(login, action.payload);
    yield put(
      loginSuccess({
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      })
    );
  } catch (error: any) {
    yield put(loginFailure(error.response?.data?.message || 'Login failed'));
  }
}

function* handleRegister(action: ReturnType<typeof registerRequest>) {
  try {
    const data = yield call(register, action.payload);
    yield put(
      registerSuccess({
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      })
    );
  } catch (error: any) {
    yield put(registerFailure(error.response?.data?.message || 'Registration failed'));
  }
}

function* handleLogout() {
  try {
    yield call(logout); // Вызываем API для выхода
    yield put(logoutAction()); // Диспатчим действие для очистки состояния
  } catch (error) {
    console.error('Logout failed', error);
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(registerRequest.type, handleRegister);
  yield takeLatest(refreshTokenRequest.type, handleRefreshToken); 
  yield takeLatest(logoutAction.type, handleLogout);  
}
