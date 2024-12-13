import React, { Suspense } from "react";
import store from "./store";
import { Provider } from "react-redux";
import {  RouterProvider } from "react-router-dom";

import { Spinner } from "../shared/ui/components/Spinner";

import router from "./router/router";

export default function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
}
