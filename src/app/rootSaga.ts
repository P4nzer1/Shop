import { all } from 'redux-saga/effects';
import cartSaga from '../entities/Cart/model/cartSaga';
import profileSaga from '../entities/Profile/model/ProfileSaga';
import authSaga from '../features/Auth/model/authSaga'; 
import catalogSaga from '../entities/Catalog/model/CatalogSaga';
import orderSaga from '../features/Orders/model/ordersSaga';

export default function* rootSaga() {
  yield all([
    cartSaga(),    
    profileSaga(), 
    authSaga(),    
    catalogSaga(),
    orderSaga(),
  ]);
}
