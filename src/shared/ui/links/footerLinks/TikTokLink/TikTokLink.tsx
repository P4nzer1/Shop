import React from 'react';
import { Link } from 'react-router-dom';

import style from './TikTokLink.module.scss'

const TikTokLink = () => {
  return (
    <div>
      <Link to={'https://www.tiktok.com'} className={style.text}>Наш TikTok</Link>
    </div>
  );
};

export default TikTokLink;