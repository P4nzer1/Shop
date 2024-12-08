import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  cancelOrderRequest,
  cancelOrderSuccess,
  cancelOrderFailure,
} from './ordersSlice';
import { getOrders, cancelOrder } from '../api/ordersApi';

function* fetchOrdersSaga() {
  try {
    const orders = yield call(getOrders);
    yield put(fetchOrdersSuccess(orders));
  } catch (error: any) {
    yield put(fetchOrdersFailure(error.message));
  }
}

function* cancelOrderSaga(action: { payload: string }) {
  try {
    yield call(cancelOrder, action.payload);
    yield put(cancelOrderSuccess(action.payload));
  } catch (error: any) {
    yield put(cancelOrderFailure(error.message));
  }
}

export default function* orderSaga() {
  yield takeLatest(fetchOrdersRequest, fetchOrdersSaga);
  yield takeLatest(cancelOrderRequest, cancelOrderSaga);
}
