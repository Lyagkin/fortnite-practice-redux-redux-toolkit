import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { addedProductFromRedux, addedProductId } from "../../../actions";
import imgNotFound from "../../../resources/img/icon-image-not-found-free-vector.jpg";

// import { motion } from "framer-motion";

import "./productsItem.scss";

const ProductsItem = (props) => {
  // console.log("render item");

  const dispatch = useDispatch();

  const product = createSelector((state) => {
    if (!state.productId) {
      return state.product;
    } else {
      console.log("render");
      const seacrhingProduct = state.order.find(
        (item) => item.mainId === state.productId,
      );

      return seacrhingProduct;
    }
  });

  // console.log(product);

  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    showSome,
  } = props;

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
            dispatch(addedProductId(mainId));

            showSome();
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
