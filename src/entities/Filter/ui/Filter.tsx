import { useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setBrand,
  setModel,
  setStock,
  setPriceRange,
  setCategory,
} from "../model/FilterSlice";
import BrandFilter from "./ComponentsFilters/BrandFilter/BrandFilter";
import ModelFilter from "./ComponentsFilters/ModelFilter/ModelFilter";
import PriceFilter from "./ComponentsFilters/PriceFilter/PriceFilter";
import StockFilter from "./ComponentsFilters/StockFilter/StockFilter";
import CategoryFilter from "./ComponentsFilters/CategoryFilter/CategoryFilter";
import { Product } from "../../Catalog/model/types";
import styles from "./Filter.module.scss";

interface FilterProps {
  products: Product[];
  brands: string[];
  models: string[];
  categories: string[];
  selectedBrand: string;
  selectedModel: string;
  selectedStock: boolean;
  selectedCategory: string;
  minPrice: number;
  maxPrice: number;
  onFilteredProducts: (filteredProducts: Product[]) => void;
}

const Filter = ({
  products,
  brands,
  models,
  categories,
  selectedBrand,
  selectedModel,
  selectedStock,
  selectedCategory,
  minPrice,
  maxPrice,
  onFilteredProducts,
}: FilterProps) => {
  const dispatch = useDispatch();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesBrand = selectedBrand
        ? product.brand === selectedBrand
        : true;
      const matchesModel = selectedModel
        ? product.model === selectedModel
        : true;
      const matchesStock = selectedStock ? product.stock > 0 : true;
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;

      const priceInRange =
        product.price >= (minPrice || 0) &&
        product.price <= (maxPrice || Infinity);

      return (
        matchesBrand &&
        matchesModel &&
        matchesCategory &&
        priceInRange &&
        matchesStock
      );
    });
  }, [
    products,
    selectedBrand,
    selectedModel,
    selectedCategory,
    minPrice,
    maxPrice,
    selectedStock,
  ]);

  useEffect(() => {
    onFilteredProducts(filteredProducts);
  }, [filteredProducts, onFilteredProducts]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          Всего товаров: {filteredProducts.length}
        </h2>
        <div className={styles.filter}>
          <BrandFilter
            options={brands}
            selectedOption={selectedBrand}
            onChange={(value) => dispatch(setBrand(value))}
          />
          <CategoryFilter
            options={categories}
            selectedOption={selectedCategory}
            onChange={(value) => dispatch(setCategory(value))}
          />
          <ModelFilter
            options={models}
            selectedOption={selectedModel}
            onChange={(value) => dispatch(setModel(value))}
          />
          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            onChange={(range) => dispatch(setPriceRange(range))}
          />
          <StockFilter
            selectedOption={selectedStock}
            onChange={(value) => dispatch(setStock(value))}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
