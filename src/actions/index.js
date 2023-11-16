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

const productsFetching = () => {
  return {
    type: "PRODUCTS__FETCHING",
  };
};

const productsFetched = (data) => {
  let products;

  if (data.shop) {
    products = data.shop.slice(0, 12);
  }

  return {
    type: "PRODUCTS__FETCHED",
    payload: products,
  };
};

const productsFetchingErrors = () => {
  return {
    type: "PRODUCTS__FETCHING__ERROR",
  };
};

const togglingCart = () => {
  return {
    type: "TOGGLE__CART_SHOW",
  };
};

const showAlertName = (name = "") => {
  return {
    type: "SHOW__ALERT__NAME",
    payload: name,
  };
};

const addedProductId = (id) => {
  return {
    type: "ADDED__PRODUCT__ID",
    payload: id,
  };
};

const addedProductFromRedux = (id) => {
  return {
    type: "ADDED__PRODUCT",
    payload: id,
  };
};

const removeProductByRedux = (id) => {
  return {
    type: "REMOVE__PRODUCT__BY__REDUX",
    payload: id,
  };
};

const addingOrderProductByRedux = (order) => {
  return {
    type: "ADDING__ORDER__PRODUCT",
    payload: order,
  };
};

const subtractingOrderProductByRedux = (order) => {
  return {
    type: "SUBSTRACTING__ORDER__PRODUCT",
    payload: order,
  };
};

export {
  fetchProduct,
  togglingCart,
  showAlertName,
  addedProductId,
  addedProductFromRedux,
  removeProductByRedux,
  addingOrderProductByRedux,
  subtractingOrderProductByRedux,
};
