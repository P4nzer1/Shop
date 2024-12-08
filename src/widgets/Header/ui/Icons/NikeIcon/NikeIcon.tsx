import { Link } from 'react-router-dom';

import styles from './NikeIcon.module.scss'; 

const NikeIcon = () => {
    return (
        <Link to="/catalog/nike">
            <svg
                className={styles.icon} 
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Nike"
                fill="currentColor"
            >
                <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z" />
            </svg>
        </Link>
    );
};

export default NikeIcon;
