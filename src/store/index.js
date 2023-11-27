import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

import { reducer as products } from "../components/shop/productSlice";
import { reducer as mainPage } from "../components/mainPage/mainPageSlice";

const store = configureStore({
  reducer: {
    products,
    mainPage,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  // eslint-disable-next-line
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
