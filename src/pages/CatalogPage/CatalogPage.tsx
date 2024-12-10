import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';
import CatalogItem from '../../entities/Catalog/ui/CatalogItem';
import CatalogTotal from '../../entities/Catalog/ui/CatalogTotal';
import BrandFilter from '../../features/Catalog/BrandFilter/BrandFilter';
import { Spinner } from '../../shared/ui/components/Spinner';
import { useCatalog } from '../../shared/hooks/useCatalog';
import styles from './CatalogPage.module.scss';

const CatalogPage: React.FC = () => {
  useCatalog();
  const { products, loading, error } = useSelector((state: RootState) => state.catalog);

  const renderContent = () => {
    if (loading) return <Spinner />;
    if (error) return <p className={styles.message}>Ошибка при загрузке каталога: {error}</p>;
    if (products.length === 0) return <p className={styles.message}>Каталог пуст</p>;

    return (
      <>
        <div className={styles.catalogItems}>
          {products.map((product) => (
            <CatalogItem key={product.id} {...product} />
          ))}
        </div>
        <CatalogTotal total={products.length} />
      </>
    );
  };

  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <h1>Каталог</h1>
        <BrandFilter />
        {renderContent()}
      </main>
      <Footer />
    </>
  );
};

export default CatalogPage;


