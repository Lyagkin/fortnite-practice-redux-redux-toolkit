import { useSelector } from "react-redux";
import ProductsItem from "../productsItem/ProductsItem";

import "./productsList.scss";

const ProductsList = () => {
  // console.log("list");
  const products = useSelector((state) => state.products);

  if (products.length === 0) {
    return (
      <h3 style={{ textAlign: "center", fontSize: "3rem" }}>No Products!</h3>
    );
  }

  const content = products.map((product) => {
    return <ProductsItem key={product.mainId} {...product} />;
  });

  return <div className="products">{content}</div>;
};

export default ProductsList;
