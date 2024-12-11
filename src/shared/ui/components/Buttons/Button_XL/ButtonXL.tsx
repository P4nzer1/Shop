import React from 'react';
import styles from './ButtonXL.module.scss';

interface ButtonXLProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const ButtonXL: React.FC<ButtonXLProps> = ({ label, onClick, disabled }) => {
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

export default ButtonXL;
