import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure, setSelectedBrand } from './CatalogSlice';
import { getProducts } from '../api/CatalogApi';


function* fetchCatalogSaga(action: any) {
  const brand = action.payload; 

  try {
    const products = yield call(getProducts, brand);
    yield put(fetchProductsSuccess(products));
  } catch (error: any) {
    yield put(fetchProductsFailure(error.message));
  }
}

export default function* catalogSaga() {
  yield takeLatest(fetchProductsRequest.type, fetchCatalogSaga);
}
