import { PayloadAction } from '@reduxjs/toolkit';
export interface UseCatalogProps {
  onFetchBrands: () => void;
  onSetBrand: (brand: string) => void;
  onFetchProducts: (brand: string | null) => void;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface FilterState {
  brand: string;
  model: string;
  category: string;
  stock: boolean;
  priceRange: PriceRange;
}

export const initialState: FilterState = {
  brand: "",
  model: "",
  category: "",
  stock: false,
  priceRange: { min: 0, max: 100000 },
};

export interface FilterProps {
    options: string[]; // Список опций для выбора (бренды, модели и т.д.)
    selectedOption: string; // Выбранная опция
    onChange: (value: string) => void; // Обработчик изменения
}

export interface PriceFilterProps {
    minPrice: number; // Текущее минимальное значение
    maxPrice: number; // Текущее максимальное значение
    onChange: (range: PriceRange) => void; // Обработчик изменения диапазона цен
    minLimit?: number; // Минимально допустимое значение
    maxLimit?: number; // Максимально допустимое значение
}
export interface StockFilterProps {
    selectedOption: boolean;
    onChange: (value: boolean) => void;
}
  
  
  
export type Action = PayloadAction<string>;
