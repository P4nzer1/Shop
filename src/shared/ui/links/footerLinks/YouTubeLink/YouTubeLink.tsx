import { Link } from 'react-router-dom';

import style from './YouTubeLink.module.scss'
import { YouTube } from '../constants';

const YouTubeLink = () => {
  return <Link to={YouTube} className={style.text}>Наш YouTube</Link>
};

export default YouTubeLink;