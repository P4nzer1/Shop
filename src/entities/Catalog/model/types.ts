// entities/Catalog/model/types.ts
import { PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  name: string;          // Название товара
  brand: string;         // Бренд товара
  model: string;         // Модель товара
  price: number;         // Цена товара
  description: string;   // Описание товара
  images: string[];      // Список изображений товара
  category: string;      // Категория товара
  stock: number;         // Количество товара на складе
}

export interface ProductCardProps extends Omit<Product, 'stock'> {
  alt?: string;
}

export interface ProductListProps {
  products: Product[];
  productsPerPage?: number;
}

// Тип состояния каталога
export interface CatalogState {
  products: Product[];
  brands: string[];
  models: string[];
  categories: string[];
  selectedBrand: string | null;
  loading: boolean;
  error: string | null;
}

// Начальное состояние
export const initialState: CatalogState = {
  products: [],
  brands: [],
  models: [],
  categories: [],
  selectedBrand: null,
  loading: false,
  error: null,
};

// Типы для действий (Actions)
export type FetchProductsAction = { payload: string | null };
export type FetchProductsSuccessAction = PayloadAction<Product[]>;
export type FailureAction = PayloadAction<string>;
export type FetchBrandsSuccessAction = PayloadAction<string[]>;
