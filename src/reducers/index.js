const initialState = {
  products: [],
  productsLoadingStatus: "waiting",
  isCartShow: false,
  alertName: "",
  productId: null,
  order: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS__FETCHING":
      return {
        ...state,
        productsLoadingStatus: "loading",
      };
    case "PRODUCTS__FETCHED":
      return {
        ...state,
        products: action.payload,
        productsLoadingStatus: "idle",
      };
    case "PRODUCTS__FETCHING__ERROR":
      return {
        ...state,
        productsLoadingStatus: "error",
      };
    case "TOGGLE__CART_SHOW":
      return {
        ...state,
        isCartShow: !state.isCartShow,
      };
    case "SHOW__ALERT__NAME":
      return {
        ...state,
        alertName: action.payload,
      };
    case "ADDED__PRODUCT__ID": {
      return {
        ...state,
        productId: action.payload,
      };
    }
    case "ADDED__PRODUCT": {
      const seacrhingProduct = state.order.find(
        (item) => item.mainId === action.payload,
      );

      let newOrder;
      let alertName = "";

      if (!seacrhingProduct) {
        const choiseProduct = state.products.find(
          (item) => item.mainId === action.payload,
        );

        newOrder = [...state.order, { ...choiseProduct, number: 1 }];
        alertName = choiseProduct.displayName;
      } else {
        newOrder = state.order.map((item) => {
          if (action.payload === item.mainId) {
            return {
              ...item,
              number: item.number + 1,
            };
          } else {
            return item;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName,
      };
    }
    case "REMOVE__PRODUCT__BY__REDUX":
      return {
        ...state,
        order: state.order.filter((item) => item.mainId !== action.payload),
      };
    case "ADDING__ORDER__PRODUCT":
      return {
        ...state,
        order: action.payload,
      };
    case "SUBSTRACTING__ORDER__PRODUCT":
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
