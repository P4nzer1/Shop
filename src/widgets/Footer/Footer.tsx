import AuthorLink from '../../shared/ui/links/AuthorLink/AuthorLink';
import TelegramLink from '../../shared/ui/links/TelegramLink/TelegramLink';
import TikTokLink from '../../shared/ui/links/TikTokLink/TikTokLink';
import VkLink from '../../shared/ui/links/VkLink/VkLink';
import YouTubeLink from '../../shared/ui/links/YouTubeLink/YouTubeLink';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <TelegramLink />
          <VkLink />
          <TikTokLink />
          <YouTubeLink />
          <AuthorLink />
        </nav>
      </div>
    </div>
  );
};

export default Footer;
