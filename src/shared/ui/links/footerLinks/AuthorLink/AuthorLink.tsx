import { Link } from 'react-router-dom';

import style from './AuthorLink.module.scss'
import { Author } from '../constants';

const AuthorLink = () => {
  return <Link to={Author} className={style.text}>Developers</Link>
};

export default AuthorLink;