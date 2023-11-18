import {
  productsFetching,
  productsFetched,
  productsFetchingErrors,
} from "../components/shop/productSlice";

const fetchProduct = (request) => (dispatch) => {
  let isIgnoreresponse = false;

  dispatch(productsFetching());

  request("https://fortniteapi.io/v2/shop?lang=ru")
    .then((data) => {
      if (!isIgnoreresponse) {
        dispatch(productsFetched(data.shop));
      }
    })
    .catch(() => {
      dispatch(productsFetchingErrors());
    });

  return () => {
    isIgnoreresponse = true;
  };
};

export { fetchProduct };
