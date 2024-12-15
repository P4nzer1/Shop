import classNames from "classnames";
import styles from "./Button.module.scss";


interface ButtonProps {
  className?: string;
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, onClick, className, type='button' }: ButtonProps) => {
  const buttonClass = classNames(styles.button, className) 
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
