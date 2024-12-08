import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Order {
  id: string;
  items: any[];
  total: number;
  status: string;
}

interface OrderState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    fetchOrdersRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchOrdersSuccess(state, action: PayloadAction<Order[]>) {
      state.loading = false;
      state.orders = action.payload;
    },
    fetchOrdersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    cancelOrderRequest(state) {
      state.loading = true;
    },
    cancelOrderSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.orders = state.orders.filter((order) => order.id !== action.payload);
    },
    cancelOrderFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  cancelOrderRequest,
  cancelOrderSuccess,
  cancelOrderFailure,
} = orderSlice.actions;

export default orderSlice.reducer;
