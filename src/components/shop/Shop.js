import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";
import Spiner from "../spinner/Spiner";
import NotFound from "../notFound/NotFound";
import ProductsList from "../products/productsList/ProductsList";
import Cart from "../cart/cartView/Cart";
import CartListWrapper from "../cartListWrapper/CartListWrapper";

import { useGetProductsQuery } from "../../api/apiSlice";

import "./shop.scss";

const Shop = () => {
  // console.log("shop");
  const productsLoadingStatus = useSelector(
    ({ products }) => products.productsLoadingStatus,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { data: products = [], isLoading, isError } = useGetProductsQuery();

  console.log(products.shop);

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
