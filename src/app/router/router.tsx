import { createBrowserRouter } from "react-router-dom";

import Layout from "../../pages/LayoutPage/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import OrderPageLazy from "../../pages/OrdersPage/OrdersPage.lazy";
import {ProfilePageLazy} from "../../pages/ProfilePage/ProfilePage.lazy";
import {CartPageLazy} from "../../pages/CartPage/CartPage.lazy";
import CatalogPageLazy from "../../pages/CatalogPage/CatalogPage.lazy";
import { AuthPageLazy } from "../../pages/AuthPage/AuthPage.lazy";
import { RegisterPageLazy } from "../../pages/RegisterPage/RegisterPage.lazy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "catalog",
        element: <CatalogPageLazy />,
      },
      {
        path: "cart",
        element: <CartPageLazy />,
      },
      {
        path: "profile",
        element: <ProfilePageLazy />,
      },
      {
        path: "order",
        element: <OrderPageLazy />,
      },
      
      {
        path: "/login",
        element: <AuthPageLazy />,
      },
      {
        path: "/register",
        element: <RegisterPageLazy />,
      },
    ],
  }
]);

export default router;
