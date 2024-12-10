import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchProductsRequest, fetchBrandsRequest, setSelectedBrand } from '../../entities/Catalog/model/CatalogSlice';

export const useCatalog = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchBrandsRequest());
  }, [dispatch]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const brand = searchParams.get('brand');

    if (brand) {
      dispatch(setSelectedBrand(brand));
      dispatch(fetchProductsRequest(brand));
    } else {
      dispatch(fetchProductsRequest(null));
    }
  }, [dispatch, location.search]);
};
