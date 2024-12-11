import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setBrand } from '../../entities/Filter/model/FilterSlice';

import { fetchProductsRequest, fetchBrandsRequest, setSelectedBrand } from '../../entities/Catalog/model/CatalogSlice';

export const useCatalog = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    console.log('Dispatching fetchBrandsRequest');
    dispatch(fetchBrandsRequest());
  }, [dispatch]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const brand = searchParams.get('brand');

    if (brand) {
      dispatch(setSelectedBrand(brand));
      dispatch(fetchProductsRequest(brand));
      dispatch(setBrand(brand));
      console.log('Brand from URL:', brand);
    } else {
      dispatch(fetchProductsRequest(null));
    }
  }, [dispatch, location.search]);
};


