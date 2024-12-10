import style from './Header.module.scss';
import GoHome from '../../shared/ui/links/HomeLink/Home';
import AdidasIcon from '../../shared/ui/icons/AdidasIcon/AdidasIcon';
import CartIcon from '../../shared/ui/icons/CartIcon/CartIcon';
import NewBalanceIcon from '../../shared/ui/icons/NewBalanceIcon/NewBalanceIcon';
import NikeIcon from '../../shared/ui/icons/NikeIcon/NikeIcon';
import ProfileIcon from '../../shared/ui/icons/ProfileIcon/ProfileIcon';
import TheNorthFaceIcon from '../../shared/ui/icons/TheNorthFaceIcon/TheNorthFaceIcon';
import CatalogLink from '../../shared/ui/links/CatalogLink/CatalogLink';
import OrderLink from '../../shared/ui/links/OrderLink/OrderLink';
import PumaIcon from '../../shared/ui/icons/Puma/PumaIcon';

const Header = () => {
  return (
    <div className={style.header}>
        <div className={style.home}>
          <GoHome />
        </div>
        <div className={style.nav}>
          < div className={style.brands}>
            <PumaIcon />
            <TheNorthFaceIcon />
            <NewBalanceIcon />
            <AdidasIcon />
            <NikeIcon />
          </div>
          <div className={style.links}>
            <OrderLink />
            <CatalogLink />
          </div>
          < div className={style.user}>
            <CartIcon />
            <ProfileIcon />
          </div>
        </div>
    </div>
  );
};

export default Header;
