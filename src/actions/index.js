import { createAction } from "@reduxjs/toolkit";

const fetchProduct = (request) => (dispatch) => {
  let isIgnoreresponse = false;

  dispatch(productsFetching());

  request("https://fortniteapi.io/v2/shop?lang=ru")
    .then((data) => {
      if (!isIgnoreresponse) {
        dispatch(productsFetched(data));
      }
    })
    .catch(() => {
      dispatch(productsFetchingErrors());
    });

  return () => {
    isIgnoreresponse = true;
  };
};

// const productsFetching = () => {
//   return {
//     type: "PRODUCTS__FETCHING",
//   };
// };

const productsFetching = createAction("PRODUCTS__FETCHING");

// const productsFetched = (data) => {
//   return {
//     type: "PRODUCTS__FETCHED",
//     payload: data.shop ? data.shop.slice(0, 12) : data.shop,
//   };
// };

const productsFetched = createAction("PRODUCTS__FETCHED", (data) => {
  return {
    payload: data.shop ? data.shop.slice(0, 12) : data.shop,
  };
});

// const productsFetchingErrors = () => {
//   return {
//     type: "PRODUCTS__FETCHING__ERROR",
//   };
// };

const productsFetchingErrors = createAction("PRODUCTS__FETCHING__ERROR");

// const togglingCart = () => {
//   return {
//     type: "TOGGLE__CART_SHOW",
//   };
// };

const togglingCart = createAction("TOGGLE__CART_SHOW");

// const showAlertName = (name = "") => {
//   return {
//     type: "SHOW__ALERT__NAME",
//     payload: name,
//   };
// };

const showAlertName = createAction("SHOW__ALERT__NAME", (name = "") => {
  return {
    payload: name,
  };
});

// const addedProductId = (id) => {
//   return {
//     type: "ADDED__PRODUCT__ID",
//     payload: id,
//   };
// };

const addedProductId = createAction("ADDED__PRODUCT__ID");

// const addedProductFromRedux = (id) => {
//   return {
//     type: "ADDED__PRODUCT",
//     payload: id,
//   };
// };

const addedProductFromRedux = createAction("ADDED__PRODUCT");

// const removeProductByRedux = (id) => {
//   return {
//     type: "REMOVE__PRODUCT__BY__REDUX",
//     payload: id,
//   };
// };

const removeProductByRedux = createAction("REMOVE__PRODUCT__BY__REDUX");

// const addingOrderProductByRedux = (order) => {
//   return {
//     type: "ADDING__ORDER__PRODUCT",
//     payload: order,
//   };
// };

const addingOrderProductByRedux = createAction("ADDING__ORDER__PRODUCT");

// const subtractingOrderProductByRedux = (order) => {
//   return {
//     type: "SUBSTRACTING__ORDER__PRODUCT",
//     payload: order,
//   };
// };

const subtractingOrderProductByRedux = createAction(
  "SUBSTRACTING__ORDER__PRODUCT",
);

export {
  fetchProduct,
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
};
