import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import styles from "./ProfileLink.module.scss";

const Profile = () => {
  return (
    <Link to="/profile" className={styles.link}>
      <FaUserCircle aria-label="Profile" className={styles.icon} />
    </Link>
  );
};

export default Profile;
