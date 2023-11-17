import { createReducer } from "@reduxjs/toolkit";

import {
  productsFetching,
  productsFetched,
  productsFetchingErrors,
  togglingCart,
  showAlertName,
  addedProductId,
  addedProductFromRedux,
  removeProductByRedux,
  addingOrderProductByRedux,
  subtractingOrderProductByRedux,
} from "../actions";

const initialState = {
  products: [],
  productsLoadingStatus: "waiting",
  isCartShow: false,
  alertName: "",
  productId: undefined,
  order: [],
};

const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(productsFetching, (state) => {
      state.productsLoadingStatus = "loading";
    })
    .addCase(productsFetched, (state, action) => {
      state.productsLoadingStatus = "idle";
      state.products = action.payload;
    })
    .addCase(productsFetchingErrors, (state) => {
      state.productsLoadingStatus = "error";
    })
    .addCase(togglingCart, (state) => {
      state.isCartShow = !state.isCartShow;
    })
    .addCase(showAlertName, (state, action) => {
      state.alertName = action.payload;
    })
    .addCase(addedProductId, (state, action) => {
      state.productId = action.payload;
    })
    .addCase(addedProductFromRedux, (state, action) => {
      const addedProduct = state.order.find(
        (item) => item.mainId === action.payload,
      );

      const compareProduct = state.products.find(
        (item) => item.mainId === action.payload,
      );

      if (!addedProduct) {
        state.order.push({
          ...compareProduct,
          number: 1,
        });
        state.alertName = compareProduct.displayName;
      } else {
        addedProduct.number += 1;
        state.alertName = addedProduct.displayName;
      }
    })
    .addCase(removeProductByRedux, (state, action) => {
      state.order = state.order.filter(
        (item) => item.mainId !== action.payload,
      );
    })
    .addCase(addingOrderProductByRedux, (state, action) => {
      const seacrhingProduct = state.order.find(
        (item) => item.mainId === action.payload,
      );

      seacrhingProduct.number += 1;
    })
    .addCase(subtractingOrderProductByRedux, (state, action) => {
      const seacrhingProduct = state.order.find(
        (item) => item.mainId === action.payload,
      );

      seacrhingProduct.number > 0 ? (seacrhingProduct.number -= 1) : 0;
    })
    .addDefaultCase(() => {});
});

export default productReducer;
