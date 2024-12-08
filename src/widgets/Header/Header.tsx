import style from './Header.module.scss';
import GoHome from './ui/Home/Home';
import AdidasIcon from './ui/Icons/AdidasIcon/AdidasIcon';
import CartIcon from './ui/Icons/CartIcon/CartIcon';
import NewBalanceIcon from './ui/Icons/NewBalanceIcon/NewBalanceIcon';
import NikeIcon from './ui/Icons/NikeIcon/NikeIcon';
import ProfileIcon from './ui/Icons/ProfileIcon/ProfileIcon';
import TheNorthFaceIcon from './ui/Icons/TheNorthFaceIcon/TheNorthFaceIcon';
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
          <TheNorthFaceIcon />
          <NewBalanceIcon />
          <AdidasIcon />
          <NikeIcon />
          <CartIcon />
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
