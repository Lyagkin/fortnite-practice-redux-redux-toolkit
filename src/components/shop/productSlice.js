import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import useHttp from "../../hook/http.hook";

// const initialState = {
//   products: [],
//   productsLoadingStatus: "waiting",
//   isCartShow: false,
//   alertName: "",
//   productId: undefined,
//   order: [],
// };

const productsAdapter = createEntityAdapter({
  selectId: (product) => product.mainId,
});

const initialState = productsAdapter.getInitialState({
  productsLoadingStatus: "waiting",
  isCartShow: false,
  alertName: "",
  order: [],
});

// console.log(initialState);

export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  const request = useHttp();
  return request("https://fortniteapi.io/v2/shop?lang=ru");
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productsLoadingStatus = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsLoadingStatus = "idle";

        let products;
        action.payload
          ? (products = action.payload.shop.slice(0, 12))
          : (products = []);

        productsAdapter.setAll(state, products);
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.productsLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = productsSlice;

export default reducer;

export const { selectAll } = productsAdapter.getSelectors(
  (state) => state.products,
);

export const {
  togglingCart,
  showAlertName,
  addedProductFromRedux,
  removeProductByRedux,
  addingOrderProductByRedux,
  subtractingOrderProductByRedux,
} = actions;
