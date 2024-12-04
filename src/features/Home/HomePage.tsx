import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LineChart from '../../components/Charts/LineChart';
import { useData } from '../../hooks/useData';


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
