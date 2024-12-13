import { call, put, takeLatest } from 'redux-saga/effects';

import {
  fetchBrandsRequest,
  fetchBrandsSuccess,
  fetchBrandsFailure,
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  setSelectedBrand,
} from './CatalogSlice';
import { getProducts, getBrands } from '../api/CatalogApi';
import { FetchProductsAction } from './constants';
import { MOCK_BRANDS } from './mocks';
import { tryCatchWrapper } from './sagaUtils';

function* fetchBrandsSaga() {
  console.log('fetchBrandsSaga called');
  // const response = yield call(getBrands);
   // yield put(fetchBrandsSuccess(response.data));
  yield put(fetchBrandsSuccess(MOCK_BRANDS));
}

function* fetchProductsSaga(action: FetchProductsAction) {
  yield put(setSelectedBrand(action.payload));
  const response = yield call(getProducts, action.payload);
  yield put(fetchProductsSuccess(response.data));
}
const wrappedFetchBrandsSaga = tryCatchWrapper(fetchBrandsSaga, fetchBrandsFailure);
const wrappedFetchProductsSaga = tryCatchWrapper(fetchProductsSaga, fetchProductsFailure);

export default function* catalogSaga() {
  yield takeLatest(fetchBrandsRequest.type, wrappedFetchBrandsSaga);
  yield takeLatest(fetchProductsRequest, wrappedFetchProductsSaga);
}
