import { Link } from 'react-router-dom';

import styles from './AdidasIcon.module.scss'; 

const AdidasIcon = () => {
    return (
        <Link to="/catalog/adidas">
            <svg className={styles.icon}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="adidas"
                fill="currentColor"
            >
                <path d="m24 19.535-8.697-15.07-4.659 2.687 7.145 12.383Zm-8.287 0L9.969 9.59 5.31 12.277l4.192 7.258ZM4.658 14.723l2.776 4.812H1.223L0 17.41Z"/>
            </svg>
        </Link>
    );
};

export default AdidasIcon;


