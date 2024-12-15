import { Link } from 'react-router-dom';

import style from './VkLink.module.scss'
import { VK } from '../constants';

const VkLink = () => {
  return <Link to={VK} className={style.text}>Наш VK</Link>

};

export default VkLink;