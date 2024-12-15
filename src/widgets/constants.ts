import AuthorLink from '../shared/ui/links/footerLinks/AuthorLink/AuthorLink';
import TelegramLink from '../shared/ui/links/footerLinks/TelegramLink/TelegramLink';
import TikTokLink from '../shared/ui/links/footerLinks/TikTokLink/TikTokLink';
import VkLink from '../shared/ui/links/footerLinks/VkLink/VkLink';
import YouTubeLink from '../shared/ui/links/footerLinks/YouTubeLink/YouTubeLink';
import Adidas from '../shared/ui/links/headerLinks/AdidasLink/AdidasLink';
import Cart from '../shared/ui/links/headerLinks/CartLink/CartLink';
import NewBalance from '../shared/ui/links/headerLinks/NewBalanceLink/NewBalanceLink';
import Nike from '../shared/ui/links/headerLinks/NikeLink/NikeLink';
import Profile from '../shared/ui/links/headerLinks/ProfileLink/ProfileLink';
import TheNorthFace from '../shared/ui/links/headerLinks/TheNorthFaceLink/TheNorthFaceLink';
import Catalog from '../shared/ui/links/headerLinks/CatalogLink/CatalogLink';
import Order from '../shared/ui/links/headerLinks/OrderLink/OrderLink';
import Puma from '../shared/ui/links/headerLinks/PumaLink/PumaLink';


export const linksHeader = [
    { component: Puma, category: 'brand' },
    { component: TheNorthFace, category: 'brand' },
    { component: NewBalance, category: 'brand' },
    { component: Adidas, category: 'brand' },
    { component: Nike, category: 'brand' },
    { component: Order, category: 'user' },
    { component: Catalog, category: 'user' },
    { component: Cart, category: 'user' },
    { component: Profile, category: 'user' },
]

export const linksFooter = [
    TelegramLink,
    VkLink,
    TikTokLink,
    YouTubeLink,
    AuthorLink,
]