import Login from "../../features/Auth/ui/Login/Login";
import styles from "./AuthPage.module.scss";

const AuthPage = () => {
  return (
    <div className={styles.content}>
      <h2>Вход</h2>
      <Login />
    </div>
  );
};

export default AuthPage;
