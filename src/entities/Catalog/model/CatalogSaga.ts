import { call, put, takeLatest } from 'redux-saga/effects';

import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from './CatalogSlice';
import { getProducts } from '../api/CatalogApi';
import { FetchProductsAction } from './types';
//import { MOCK_BRANDS } from './mocks';
import { tryCatchWrapper } from './sagaUtils';


function* fetchProductsSaga(action: FetchProductsAction) {

  const response = yield call(getProducts, action.payload);
  yield put(fetchProductsSuccess(response));
}

const wrappedFetchProductsSaga = tryCatchWrapper(fetchProductsSaga, fetchProductsFailure);

export default function* catalogSaga() {
  yield takeLatest(fetchProductsRequest, wrappedFetchProductsSaga);
}
