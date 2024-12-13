import React from 'react';
import styles from './ButtonM.module.scss';

interface ButtonMProps {
  icon: React.ReactNode; 
  onClick: () => void;
  ariaLabel: string; 
}

const  ButtonM: React.FC<ButtonMProps> = ({ icon, onClick, ariaLabel }) => {
  return (
    <button
      className={styles.buttonIcon}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};

export default ButtonM;
