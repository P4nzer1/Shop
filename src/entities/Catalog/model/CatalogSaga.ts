// src/entities/Catalog/model/catalogSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from './CatalogSlice';
import { getProducts } from '../api/CatalogApi';

function* fetchCatalogSaga() {
  try {
    const products = yield call(getProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error: any) {
    yield put(fetchProductsFailure(error.message));
  }
}

export default function* catalogSaga() {
  yield takeLatest(fetchProductsRequest.type, fetchCatalogSaga);
}
