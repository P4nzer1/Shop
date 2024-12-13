import { PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
    brand: string;
    priceRange: string;
    model: string;
    availability: string;
}
  
export const initialState: FilterState = {
    brand: '',
    priceRange: '',
    model: '',
    availability: '',
};
  
export type Action = PayloadAction<string>;