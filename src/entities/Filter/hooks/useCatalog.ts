import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { fetchProductsRequest } from "../../Catalog/model/CatalogSlice";
import { Product } from "../../Catalog/model/types";

export const useCatalog = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state: RootState) => state.catalog);
  const { brand, model, stock, category, priceRange } = useSelector((state: RootState) => state.filters);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);


  useEffect(() => {
    if (!products.length && !loading) {
      dispatch(fetchProductsRequest());
    }
  }, [dispatch, products, loading]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const {  brands, categories, models } = useMemo(() => {
    const uniqueBrands = new Set<string>();
    const uniqueCategories = new Set<string>();
    const uniqueModels = new Set<string>();
  
    products.forEach((product) => {
      uniqueBrands.add(product.brand);
      uniqueCategories.add(product.category);
      uniqueModels.add(product.model);
    });
  
    return {
      brands: Array.from(uniqueBrands),
      categories: Array.from(uniqueCategories),
      models: Array.from(uniqueModels),
    };
  }, [products]);

  return {
    brands,
    products,
    categories, 
    models,     
    loading,
    error,
    filteredProducts,
    setFilteredProducts,
    brand,
    model,
    stock,
    category,
    priceRange,
  };
};


