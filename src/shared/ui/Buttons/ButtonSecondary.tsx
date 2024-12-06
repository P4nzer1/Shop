import React from 'react';
import styles from './ButtonSecondary.module.scss';

interface ButtonSecondaryProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ label, onClick, disabled }) => {
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

export default ButtonSecondary;
