import React from 'react';
import styles from './ButtonPrimary.module.scss';

interface ButtonPrimaryProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ label, onClick, disabled }) => {
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

export default ButtonPrimary;
