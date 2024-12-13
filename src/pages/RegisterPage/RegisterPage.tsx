import Register from "../../features/Auth/ui/Register/Register";
import styles from './RegisterPage.module.scss'

const RegisterPage = () => {
  return (
    <div className={styles.content}>
      <h2>Регистрация</h2>
      <Register />
    </div>
  );
};

export default RegisterPage;
