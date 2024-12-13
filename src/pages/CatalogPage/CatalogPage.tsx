import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../app/store";
import { renderStatus } from "./constants";
import { useCatalog } from "../../shared/hooks/useCatalog";

import CatalogItem from "../../entities/Catalog/ui/CatalogItem";
import CatalogTotal from "../../entities/Catalog/ui/CatalogTotal";
import GlobalFilter from "../../entities/Filter/ui/GlobalFilter";
import styles from "./CatalogPage.module.scss";

const CatalogPage: React.FC = () => {
  useCatalog();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.catalog
  );

  const status = renderStatus(loading, error, products);

  return (
    <>
      <main className={styles.content}>
        <h1>Каталог</h1>
        <GlobalFilter />
        {status ? (
          status
        ) : (
          <>
            <div className={styles.catalogItems}>
              {products.map((product) => (
                <CatalogItem key={product.id} {...product} />
              ))}
            </div>
            <CatalogTotal total={products.length} />
          </>
        )}
      </main>
    </>
  );
};

export default CatalogPage;
