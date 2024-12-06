import React from 'react';
import styles from './Footer.module.scss'; 

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <nav>
          <a className={styles.a} >жопа</a>
          <a className={styles.a} >пися</a>
          <a className={styles.a} >сися</a>
        </nav>
        <h1>Footer Title</h1>
      </div>
    </div>
  );
};

export default Footer;
