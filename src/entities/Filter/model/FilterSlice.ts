import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {  initialState } from './constatns';



const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrand(state, action: PayloadAction<string>) {
      state.brand = action.payload;
    },
    setPriceRange(state, action: PayloadAction<string>) {
      state.priceRange = action.payload;
    },
    setModel(state, action: PayloadAction<string>) {
      state.model = action.payload;
    },
    setAvailability(state, action: PayloadAction<string>) {
      state.availability = action.payload;
    },
  },
});

export const { setBrand, setPriceRange, setModel, setAvailability } = filterSlice.actions;

export default filterSlice.reducer;
