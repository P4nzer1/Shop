import { PayloadAction } from '@reduxjs/toolkit';

export interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
}

export interface CatalogState {
    products: Product[];
    brands: string[];
    selectedBrand: string | null;
    loading: boolean;
    error: string | null;
}

export const initialState: CatalogState = {
    products: [],
    brands: [],
    selectedBrand: null,
    loading: false,
    error: null,
};

export type FetchProductsAction = { payload: string | null };
export type FetchProductsSuccessAction = PayloadAction<Product[]>;
export type FailureAction = PayloadAction<string>;
export type FetchBrandsSuccessAction = PayloadAction<string[]>;