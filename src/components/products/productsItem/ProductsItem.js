import { useDispatch } from "react-redux";
import { addedProductFromRedux } from "../../shop/productSlice";
import imgNotFound from "../../../resources/img/icon-image-not-found-free-vector.jpg";

// import { motion } from "framer-motion";

import "./productsItem.scss";

const ProductsItem = (props) => {
  // console.log("render item");

  const dispatch = useDispatch();

  const { mainId, displayName, displayDescription, price, displayAssets } =
    props;

  const image =
    displayAssets.length !== 0 ? displayAssets[0].full_background : imgNotFound;

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={displayName} />
        <span className="card-title">{displayName}</span>
      </div>
      <div className="card-content">
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          // whileHover={{
          //   scale: 1.1,
          //   color: "#000",
          //   boxShadow: "none",
          // }}
          className="btn"
          onClick={() => {
            dispatch(addedProductFromRedux(mainId));
          }}
        >
          Купить
        </button>
        <span>{price.finalPrice} руб.</span>
      </div>
    </div>
  );
};

export default ProductsItem;
