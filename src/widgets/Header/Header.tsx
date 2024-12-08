import style from './Header.module.scss';
import GoHome from './ui/Home/Home';
import CartIcon from './ui/Icons/CartIcon';
import ProfileIcon from './ui/Icons/ProfileIcon';
import CatalogLink from './ui/Links/CatalogLink';
import OrderLink from './ui/Links/OrderLink';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.content}>
        <div className={style.home}>
          <GoHome />
        </div>
        <div className={style.links}>
          <OrderLink />
          <CatalogLink />
        </div>
        <div className={style.icons}>
          <CartIcon />
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
