import { configureStore } from "@reduxjs/toolkit";

import reducer from "../components/shop/productSlice";

const store = configureStore({
  reducer: {
    products: reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // eslint-disable-next-line
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
