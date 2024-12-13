import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { updateProfile } from '../../entities/Profile/model/ProfileSlice';

import ProfileTotal from '../../entities/Profile/ui/ProfileTotal';
import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';
import styles from './Profile.module.scss'

const ProfilePage = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile);

  useEffect(() => {
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
    <div>
      <Header/> 
      <div className={styles.content}>
        <h1>Профиль</h1>
        <ProfileTotal />
        <button className={styles.button} onClick={handleUpdate}>Обновить профиль</button>
      </div>
      <Footer/>
    </div>
  );
};

export default ProfilePage;
