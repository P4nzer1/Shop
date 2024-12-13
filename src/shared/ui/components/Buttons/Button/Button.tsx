import classNames from "classnames";
import styles from "./Button.module.scss";


interface ButtonProps {
  className: string;
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick, className }: ButtonProps) => {
  const buttonClass = classNames(styles.button, className) 
  return (
    <button
      className={buttonClass}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
