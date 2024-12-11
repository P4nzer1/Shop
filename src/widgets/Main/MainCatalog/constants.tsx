import { Spinner } from "../../../shared/ui/components/Spinner";
import styles from './MainCatalog.module.scss'


export const renderStatus = (loading: boolean, error: string | null, products: any[]) => {
  if (loading) return <Spinner />;
  if (error) return <p className={styles.message}>Ошибка при загрузке каталога: {error}</p>;
  if (products.length === 0) return <p className={styles.message}>Каталог пуст</p>;
}