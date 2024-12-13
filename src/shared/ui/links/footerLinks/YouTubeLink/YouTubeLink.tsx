import React from 'react';
import { Link } from 'react-router-dom';

import style from './YouTubeLink.module.scss'

const YouTubeLink = () => {
  return (
    <div>
      <Link to={'https://www.youtube.com/@-panz3r817'} className={style.text} >Наш YouTube</Link>
    </div>
  );
};

export default YouTubeLink;