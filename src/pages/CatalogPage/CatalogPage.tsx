// src/pages/CatalogPage/CatalogPage.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '../../entities/Catalog/model/CatalogSlice';
import CatalogItem from '../../entities/Catalog/ui/CatalogItem';
import CatalogTotal from '../../entities/Catalog/ui/CatalogTotal';
import { RootState } from '../../app/store';
import styles from './CatalogPage.module.scss';
import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';

const CatalogPage: React.FC = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state: RootState) => state.catalog);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  return (
    <div className={styles.catalogPage}>
      <Header /> 

      <main className={styles.mainContent}>
        <h1>Каталог</h1>

        {loading && <p className={styles.message}>Загрузка каталога...</p>}
        {error && <p className={styles.message}>Ошибка при загрузке каталога: {error}</p>}
        {!loading && !error && products.length === 0 && (
          <p className={styles.message}>Каталог пуст</p>
        )}

        {!loading && !error && products.length > 0 && (
          <div className={styles.catalogItems}>
            {products.map((product) => (
              <CatalogItem key={product.id} {...product} />
            ))}
          </div>
        )}

        {!loading && !error && <CatalogTotal total={products.length} />}
      </main>

      <Footer /> {/* Футер после основного контента */}
    </div>
  );
};

export default CatalogPage;
