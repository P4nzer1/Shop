import { Link } from 'react-router-dom';

import style from './TikTokLink.module.scss'
import { TikTok } from '../constants';

const TikTokLink = () => {
  return <Link to={TikTok} className={style.text}>Наш TikTok</Link>
};

export default TikTokLink;