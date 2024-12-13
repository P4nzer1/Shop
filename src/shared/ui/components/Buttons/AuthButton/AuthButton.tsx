import styles from "./AuthButton.module.scss";

interface AuthButtonProps {
  label: string;
  onClick: () => void;
}

const AuthButton  = ({ label, onClick } : AuthButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default AuthButton;
