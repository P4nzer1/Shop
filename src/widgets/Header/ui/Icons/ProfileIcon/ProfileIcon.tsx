import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; 
import styles from './ProfileIcon.module.scss';

const ProfileIcon = () => {
  return (
    <Link to="/profile" className={styles.icon}>
      
        <FaUserCircle aria-label="Profile" />
    
    </Link>
  );
};

export default ProfileIcon;
