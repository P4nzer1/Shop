// src/widgets/Header/ui/GoHome.tsx
import { Link } from 'react-router-dom';
import styles from './HomeLink.module.scss';

const GoHome = () => {
  return (
    <Link to="/" className={styles.h1}>
      <h1>Магазин</h1>
    </Link>
  );
};

export default GoHome;
