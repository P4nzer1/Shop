import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest, setSelectedBrand } from '../../entities/Catalog/model/CatalogSlice';
import CatalogItem from '../../entities/Catalog/ui/CatalogItem';
import CatalogTotal from '../../entities/Catalog/ui/CatalogTotal';
import { RootState } from '../../app/store';
import styles from './CatalogPage.module.scss';
import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';

const CatalogPage: React.FC = () => {
  const dispatch = useDispatch();
  const { products, loading, error, selectedBrand } = useSelector((state: RootState) => state.catalog);

  useEffect(() => {
    // При загрузке компонента передаем выбранный бренд в запрос
    dispatch(fetchProductsRequest(selectedBrand));  
  }, [dispatch, selectedBrand]);

  const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Когда пользователь меняет бренд, обновляем Redux
    const selectedBrand = event.target.value;
    dispatch(setSelectedBrand(selectedBrand)); // Устанавливаем выбранный бренд
    dispatch(fetchProductsRequest(selectedBrand));  // Запрашиваем продукты с выбранным брендом
  };

  return (
    <div className={styles.catalogPage}>
      <Header />

      <main className={styles.mainContent}>
        <h1>Каталог</h1>

        <div className={styles.filterSection}>
          <label htmlFor="brandFilter">Выберите бренд:</label>
          <select
            id="brandFilter"
            onChange={handleBrandChange}
            value={selectedBrand || ''}
          >
            <option value="">Все бренды</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="New Balance">New Balance</option>
            {/* Добавьте другие бренды по мере необходимости */}
          </select>
        </div>

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

      <Footer />
    </div>
  );
};

export default CatalogPage;
