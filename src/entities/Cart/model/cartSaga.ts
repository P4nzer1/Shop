import { call, put, takeLatest } from 'redux-saga/effects';
import { getCart, addToCart, updateCart, clearCart } from '../api/cartApi';
import { addItem, updateQuantity, removeItem } from './cartSlice';

function* fetchCartSaga() {
  try {
    const cart = yield call(getCart);

    for (const item of cart) {
      yield put(addItem(item));
    }
    yield put({ type: 'cart/fetchSuccess' });
  } catch (error) {
    yield put({ type: 'cart/fetchFailure', payload: error.message });
  }
}

function* addToCartSaga(action: any) {
  try {
    yield call(addToCart, action.payload);
    yield put(addItem(action.payload));
    yield put({ type: 'cart/addSuccess' });
  } catch (error) {
    yield put({ type: 'cart/addFailure', payload: error.message });
  }
}

function* updateCartSaga(action: any) {
  try {
    yield call(updateCart, action.payload);
    yield put(updateQuantity(action.payload));
  } catch (error) {
    yield put({ type: 'cart/updateFailure', payload: error.message });
  }
}

function* clearCartSaga() {
  try {
    yield call(clearCart);
    yield put({ type: 'cart/clearSuccess' });
  } catch (error) {
    yield put({ type: 'cart/clearFailure', payload: error.message });
  }
}

function* removeFromCartSaga(action: any) {
    try {
      yield call(removeItem, action.payload);
      yield put(removeItem(action.payload));
      yield put({ type: 'cart/removeSuccess' });
    } catch (error) {
      yield put({ type: 'cart/removeFailure', payload: error.message });
    }
  }
  

export default function* cartSaga() {
  yield takeLatest('cart/fetch', fetchCartSaga);
  yield takeLatest('cart/add', addToCartSaga);
  yield takeLatest('cart/update', updateCartSaga);
  yield takeLatest('cart/clear', clearCartSaga);
  yield takeLatest('cart/remove', removeFromCartSaga);
}
