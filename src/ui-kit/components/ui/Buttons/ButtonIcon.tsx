import React from 'react';
import styles from './IconButton.module.scss';

interface ButtonIconProps {
  icon: React.ReactNode; 
  onClick: () => void;
  ariaLabel: string; 
}

const  ButtonIcon: React.FC<ButtonIconProps> = ({ icon, onClick, ariaLabel }) => {
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

export default ButtonIcon;
