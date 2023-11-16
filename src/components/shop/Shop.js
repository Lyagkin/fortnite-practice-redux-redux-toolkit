import { useEffect } from "react";
import useHttp from "../../hook/http.hook";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../actions";
import Spiner from "../spinner/Spiner";
import NotFound from "../notFound/NotFound";
import ProductsList from "../products/productsList/ProductsList";
import Cart from "../cart/cartView/Cart";
import CartListWrapper from "../cartListWrapper/CartListWrapper";

import "./shop.scss";

const Shop = () => {
  // console.log("shop");
  const productsLoadingStatus = useSelector(
    (state) => state.productsLoadingStatus,
  );
  const dispatch = useDispatch();

  const request = useHttp();

  useEffect(() => {
    dispatch(fetchProduct(request));
  }, []);

  const spinner = productsLoadingStatus === "loading" ? <Spiner /> : null;
  const content = productsLoadingStatus === "idle" ? <ProductsList /> : null;
  const error = productsLoadingStatus === "error" ? <NotFound /> : null;

  return (
    <main className="shop container">
      <Cart />
      {spinner}
      {content}
      {error}
      <CartListWrapper />
    </main>
  );
};

export default Shop;
