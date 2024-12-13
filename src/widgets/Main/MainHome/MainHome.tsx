import LineChart from '../../../shared/ui/components/Charts/LineChart';
import { useData } from '../../../shared/hooks/useData';
import styles from './MainHome.module.scss'

const MainHome = () => {
    const data = useData();
  return (
    <div className={styles.content}>
      <h1>Добро пожаловать на главную страницу</h1>
      <LineChart data={data.chart} />
    </div>
  );
};

export default MainHome;