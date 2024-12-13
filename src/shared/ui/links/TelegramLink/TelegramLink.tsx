import React from 'react';
import { Link } from 'react-router-dom';

import style from './TelegramLink.module.scss'

const TelegramLink = () => {
  return (
    <div>
        <Link to={"https://t.me/kwls13"} className={style.text}> Наш Telegram</Link>
    </div>
  );
};

export default TelegramLink;