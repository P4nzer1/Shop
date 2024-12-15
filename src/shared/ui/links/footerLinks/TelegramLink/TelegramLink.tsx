import { Link } from 'react-router-dom';

import style from './TelegramLink.module.scss'
import { Telegram } from '../constants';

const TelegramLink = () => {
  return  <Link to={Telegram} className={style.text}>Наш Telegram</Link>
};

export default TelegramLink;