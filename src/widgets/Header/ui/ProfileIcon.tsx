import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // React Icons
import styles from './ProfileIcon.module.scss';

const ProfileIcon = () => {
  return (
    <Link to="/profile" className={styles.link}>
      <div className={styles.profileIcon}>
        <FaUserCircle className={styles.icon} aria-label="Profile" />
      </div>
    </Link>
  );
};

export default ProfileIcon;
