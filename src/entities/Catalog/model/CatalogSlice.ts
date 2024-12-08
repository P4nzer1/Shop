import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  price: number;
  brand: string;  
}

interface CatalogState {
  products: Product[];
  loading: boolean;
  error: string | null;
  selectedBrand: string | null;  
}

const initialState: CatalogState = {
  products: [],
  loading: false,
  error: null,
  selectedBrand: null,  
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    fetchProductsRequest(state, action: PayloadAction<string | null>) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    setSelectedBrand(state, action: PayloadAction<string | null>) {
      state.selectedBrand = action.payload;  
    },
  },
});

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  setSelectedBrand,
} = catalogSlice.actions;

export default catalogSlice.reducer;
