import React from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { AuthButton } from "../../shared/ui/components/Buttons";
import ProfileTotal from "../../entities/Profile/ui/ProfileTotal";
import styles from "./Profile.module.scss";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const onLogin = useCallback(() => navigate("/login"), [navigate]);
  const onRegister = useCallback(() => navigate("/register"), [navigate]);

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
            <AuthButton label="Войти" onClick={onLogin} />
            <AuthButton label="Зарегистрироваться" onClick={onRegister} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
