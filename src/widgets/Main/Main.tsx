import LineChart from '../../shared/ui/Charts/LineChart';
import { useData } from '../../shared/utils/hooks/useData';
import styles from './Main.module.scss'

const Main = () => {
    const data = useData();
  return (
    <div className={styles.conteiner}>
      <h1>Добро пожаловать на главную страницу</h1>
      <LineChart data={data.chart} />
    </div>
  );
};

export default Main;