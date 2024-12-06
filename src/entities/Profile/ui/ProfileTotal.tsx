import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import ProfileItem from './ProfileItem';

const ProfileTotal = () => {
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <div>
      <ProfileItem label="Имя" value={profile.name} />
      <ProfileItem label="Email" value={profile.email} />
      <ProfileItem label="Телефон" value={profile.phone} />
    </div>
  );
};

export default ProfileTotal;
