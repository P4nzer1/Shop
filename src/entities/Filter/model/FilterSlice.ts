import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, PriceRange } from "./constants";

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setBrand(state, action: PayloadAction<string>) {
      state.brand = action.payload;
    },
    setModel(state, action: PayloadAction<string>) {
      state.model = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setStock(state, action: PayloadAction<boolean>) {
      state.stock = action.payload;
    },
    setPriceRange(state, action: PayloadAction<PriceRange>) {
      state.priceRange = action.payload;
    },
  },
});

export const { setBrand, setModel, setCategory, setStock, setPriceRange } = filterSlice.actions;
export default filterSlice.reducer;
