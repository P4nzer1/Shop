import React from 'react';
import style from './Header.module.scss'
import CartIcon from './ui/CartIcon';
import ProfileIcon from './ui/ProfileIcon';

const Header = () => {
  return (
    
    <div className={style.header}>
      <div className={style.content}>
        <nav className={style.navbar}>
          <a className={style.a}>wfwe</a>
        </nav>
        <CartIcon/>
        <ProfileIcon/>
      </div>
    </div>

  );
};

export default Header;