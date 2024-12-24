import { createSlice } from '@reduxjs/toolkit';

import { initialState , FetchProductsSuccessAction,  FailureAction } from './types';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    fetchProductsRequest(state,) {
      console.log("fetchProductsRequest dispatched");
      state.loading = true;

    },

    fetchProductsSuccess(state, action: FetchProductsSuccessAction) {
      console.log("fetchProductsSuccess:", action.payload);
      state.loading = false;
      state.products = action.payload;
    },

    fetchProductsFailure(state, action: FailureAction) {
      console.log("fetchProductsFailure:", action.payload);
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  
} = catalogSlice.actions;

export default catalogSlice.reducer;

