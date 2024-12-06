import { lazy } from "react";

export const CartPageLazy = lazy(() => import('./CartPage'))
//не отрабатывает таймер задержки по какой-то причине 