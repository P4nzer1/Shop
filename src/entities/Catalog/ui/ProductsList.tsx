import { useMemo } from "react";
import ProductCard from "./ProductCard";
import Carousel from "../../../shared/ui/components/Carousel/Carousel";
import { ProductListProps } from "../model/types";
import { useCarousel } from "../../../shared/ui/components/Carousel/useCarousel";
import styles from "./ProductList.module.scss";

const ProductList = ({ products, productsPerPage = 12 }: ProductListProps) => {
  const totalPages = Math.ceil(products.length / productsPerPage);
  const {
    currentIndex: currentPage,
    handlePrev: handlePrevPage,
    handleNext: handleNextPage,
  } = useCarousel(totalPages);

  const currentProducts = useMemo(() => {
    const start = currentPage * productsPerPage;
    return products.slice(start, start + productsPerPage);
  }, [products, currentPage, productsPerPage]);

  return (
    <div>
      <div className={styles.container}>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <Carousel
            currentIndex={currentPage}
            totalItems={totalPages}
            prevButtonProps={{
              onClick: handlePrevPage,
              className: styles.button,
            }}
            nextButtonProps={{
              onClick: handleNextPage,
              className: styles.button,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;

