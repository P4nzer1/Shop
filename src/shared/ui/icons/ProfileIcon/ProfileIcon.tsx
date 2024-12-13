import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import styles from "./ProfileIcon.module.scss";

const ProfileIcon = () => {
  return (
    <Link to="/profile" className={styles.link}>
      <FaUserCircle aria-label="Profile" className={styles.icon} />
    </Link>
  );
};

export default ProfileIcon;
