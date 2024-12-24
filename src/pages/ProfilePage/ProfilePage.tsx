import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Button from "../../shared/ui/components/Button/Button";
import ProfileTotal from "../../entities/Profile/ui/ProfileTotal";
import styles from "./Profile.module.scss";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const onLogin = () => navigate("/login");
  const onRegister = () => navigate("/register");

  return (
    <div className={styles.content}>
      <h1>Профиль</h1>

      {isAuthenticated ? (
        <div>
          <p>Добро пожаловать, {user}!</p>
          <ProfileTotal />
        </div>
      ) : (
        <div>
          <p>
            Пожалуйста, войдите или зарегистрируйтесь, чтобы увидеть профиль.
          </p>
          <div className={styles.buttons}>
            <Button className={styles.button} text="Войти" onClick={onLogin} />
            <Button className={styles.button} text="Зарегистрироваться" onClick={onRegister} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
