import React from 'react';
import styles from './ButtonL.module.scss';

interface ButtonLProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const ButtonL: React.FC<ButtonLProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default ButtonL;
