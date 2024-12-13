import { call, put, takeLatest } from 'redux-saga/effects';
import { getProfile, updateProfile as updateProfileApi } from '../api/profileApi';
import { setProfile, updateProfile } from './ProfileSlice';

function* fetchProfileSaga() {
  try {
    const profile = yield call(getProfile);
    yield put(setProfile(profile)); // Устанавливаем данные профиля в store
  } catch (error) {
    console.error('Error fetching profile:', error.message);
  }
}

function* updateProfileSaga(action: ReturnType<typeof updateProfile>) { // Используем тип экшена
  try {
    const updatedProfile = yield call(updateProfileApi, action.payload);
    yield put(setProfile(updatedProfile)); // Обновляем профиль в store
  } catch (error) {
    console.error('Error updating profile:', error);
  }
}

export default function* profileSaga() {
  yield takeLatest('profile/fetch', fetchProfileSaga);
  yield takeLatest('profile/update', updateProfileSaga); // Используем правильный экшен
}
