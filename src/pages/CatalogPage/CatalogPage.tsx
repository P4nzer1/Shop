import Filter from "../../entities/Filter/ui/Filter";
import ProductList from "../../entities/Catalog/ui/ProductsList";
import { useCatalog } from "../../entities/Filter/hooks/useCatalog";
import { renderStatus } from "./constants";
import styles from "./CatalogPage.module.scss";

const CatalogPage = () => {
  const {
    brands,
    products,
    models,
    categories,
    loading,
    error,
    filteredProducts,
    setFilteredProducts,
    brand,
    model,
    stock,
    category,
    priceRange,
  } = useCatalog();

  return (
    <main className={styles.content}>
      <h1>Каталог</h1>
      {renderStatus(loading, error, products)}

      {!loading && !error && products.length > 0 && (
        <>
          <Filter
            products={products}
            brands={brands}
            models={models}
            categories={categories}
            selectedBrand={brand}
            selectedModel={model}
            selectedStock={stock}
            selectedCategory={category}
            minPrice={priceRange.min}
            maxPrice={priceRange.max}
            onFilteredProducts={setFilteredProducts}
          />
          <ProductList products={filteredProducts} />
        </>
      )}
    </main>
  );
};

export default CatalogPage;

