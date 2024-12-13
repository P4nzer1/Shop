import React from 'react';
import { Link } from 'react-router-dom';

import style from './AuthorLink.module.scss'

const AuthorLink = () => {
  return (
    <div>
        <Link to={'https://vk.com/panz3rtlt66'} className={style.text}>Developers</Link>
    </div>
  );
};

export default AuthorLink;