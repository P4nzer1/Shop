import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { updateProfile } from '../../entities/Profile/model/ProfileSlice';

import ProfileTotal from '../../entities/Profile/ui/ProfileTotal';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    // Запрашиваем профиль при загрузке страницы
    dispatch({ type: 'profile/fetch' });
  }, [dispatch]);

  const handleUpdate = () => {
    const updatedData = {
      name: 'Новое Имя',
      email: 'newemail@example.com',
      phone: '+1234567890',
    };

    dispatch(updateProfile(updatedData));
  };

  return (
    <div style={{ padding: '2em' }}>
      <h1>Профиль</h1>
      <ProfileTotal />
      <button
        style={{
          marginTop: '2em',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={handleUpdate}
      >
        Обновить профиль
      </button>
    </div>
  );
};

export default ProfilePage;
