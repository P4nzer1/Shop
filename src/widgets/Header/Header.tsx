import style from './Header.module.scss';
import GoHome from '../../shared/ui/links/headerLinks/HomeLink/HomeLink';
import { linksHeader } from '../constants';

const Header = () => {

  return (
    <div className={style.header}>
      <div className={style.home}>
        <GoHome />
      </div>
      <div className={style.nav}>
        < div className={style.brands}>
          {linksHeader
            .filter(link => link.category === 'brand')
            .map((link, index) => (
              <link.component key={index} />
            ))}
        </div>
        <div className={style.user}>
          {linksHeader
            .filter(link => link.category === 'user')
            .map((link, index) => (
              <link.component key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
