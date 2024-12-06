import React from 'react';

interface ProfileItemProps {
  label: string;
  value: string;
}

const ProfileItem: React.FC<ProfileItemProps> = ({ label, value }) => {
  return (
    <div style={{ marginBottom: '1em' }}>
      <strong>{label}:</strong> {value}
    </div>
  );
};

export default ProfileItem;
