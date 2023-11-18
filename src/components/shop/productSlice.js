import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsLoadingStatus: "waiting",
  isCartShow: false,
  alertName: "",
  productId: undefined,
  order: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsFetching: (state) => {
      state.productsLoadingStatus = "loading";
    },
    productsFetched: (state, action) => {
      state.productsLoadingStatus = "idle";
      state.products = action.payload;
    },
    productsFetchingErrors: (state) => {
      state.productsLoadingStatus = "error";
    },
    togglingCart: (state) => {
      state.isCartShow = !state.isCartShow;
    },
    showAlertName: (state, action) => {
      state.alertName = action.payload;
    },
    addedProductFromRedux: (state, action) => {
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
    },
    removeProductByRedux: (state, action) => {
      state.order = state.order.filter(
        (item) => item.mainId !== action.payload,
      );
    },
    addingOrderProductByRedux: (state, action) => {
      const seacrhingProduct = state.order.find(
        (item) => item.mainId === action.payload,
      );

      seacrhingProduct.number += 1;
    },
    subtractingOrderProductByRedux: (state, action) => {
      const seacrhingProduct = state.order.find(
        (item) => item.mainId === action.payload,
      );

      seacrhingProduct.number > 0 ? (seacrhingProduct.number -= 1) : 0;
    },
  },
});

const { actions, reducer } = productsSlice;

export default reducer;
export const {
  productsFetching,
  productsFetched,
  productsFetchingErrors,
  togglingCart,
  showAlertName,
  addedProductFromRedux,
  removeProductByRedux,
  addingOrderProductByRedux,
  subtractingOrderProductByRedux,
} = actions;
