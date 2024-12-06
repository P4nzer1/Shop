import React from 'react';
import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';
import LineChart from '../../shared/ui/Charts/LineChart';
import { useData } from '../../shared/utils/hooks/useData';




const HomePage: React.FC = () => {
  const data = useData();

  return (
    <>
      <Header />
      <main>
        <h1>Добро пожаловать на главную страницу</h1>
        <LineChart data={data.chart} />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
