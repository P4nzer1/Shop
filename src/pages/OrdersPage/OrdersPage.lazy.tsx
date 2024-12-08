// src/pages/OrderPage/OrderPage.lazy.tsx
import { lazy } from 'react';

const OrderPageLazy = lazy(() => import('./OrdersPage'));
export default OrderPageLazy;
