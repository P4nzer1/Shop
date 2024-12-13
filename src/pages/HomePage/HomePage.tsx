import React from "react";

import { useData } from "../../shared/hooks/useData";
import LineChart from "../../shared/ui/components/Charts/LineChart";
import styles from "./HomePage.module.scss";

const HomePage: React.FC = () => {
  const data = useData();

  return (
    <>
      <div className={styles.content}>
        <h1>Добро пожаловать на главную страницу</h1>
        <LineChart data={data.chart} />
      </div>
    </>
  );
};

export default HomePage;
