import { createSlice } from '@reduxjs/toolkit';

import { initialState , FetchProductsSuccessAction, FetchBrandsSuccessAction, FailureAction, FetchProductsAction} from './constants';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    fetchProductsRequest(state, action: FetchProductsAction) {
      state.loading = true;
      state.error = null;
      state.selectedBrand = action.payload;
    },

    fetchProductsSuccess(state, action: FetchProductsSuccessAction) {
      state.loading = false;
      state.products = action.payload;
    },

    fetchProductsFailure(state, action: FailureAction) {
      state.loading = false;
      state.error = action.payload;
    },

    fetchBrandsRequest(state) {
      state.loading = true;
    },

    fetchBrandsSuccess(state, action: FetchBrandsSuccessAction) {
      state.loading = false;
      state.brands = action.payload;
    },

    fetchBrandsFailure(state, action: FailureAction) {
      state.loading = false;
      state.error = action.payload;
    },
    
    setSelectedBrand(state, action: FetchProductsAction) {
      state.selectedBrand = action.payload;
    },
  },
});

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchBrandsRequest,
  fetchBrandsSuccess,
  fetchBrandsFailure,
  setSelectedBrand,
} = catalogSlice.actions;

export default catalogSlice.reducer;

