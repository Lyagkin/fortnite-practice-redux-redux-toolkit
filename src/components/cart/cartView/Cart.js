import { useDispatch, useSelector } from "react-redux";
import { togglingCart } from "../../../actions";
import Alert from "../../alert/Alert";
import cart from "../../../resources/icons/cart.svg";

import "./cart.scss";
import { useEffect, useRef } from "react";

const Cart = () => {
  const order = useSelector((state) => state.order);
  const alertName = useSelector((state) => state.alertName);

  // const order = useRef([]);

  // order.current = useSelector((state) => {
  //   if (!state.productId) {
  //     return order.current;
  //   } else {
  //     const seacrhingProduct = order.current.find(
  //       (item) => item.mainId === state.productId,
  //     );

  //     if (!seacrhingProduct) {
  //       const choiseProduct = state.products.find(
  //         (item) => item.mainId === state.productId,
  //       );

  //       return [...order.current, { ...choiseProduct, number: 1 }];
  //     } else {
  //       return order.current.map((item) => {
  //         if (state.productId === item.mainId) {
  //           return {
  //             ...item,
  //             number: item.number + 1,
  //           };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   }
  // });

  const numberOfProduct = order.length;

  const dispatch = useDispatch();

  const alert = alertName ? <Alert /> : null;

  // console.log(order.current);

  return (
    <>
      <div className="cart" onClick={() => dispatch(togglingCart())}>
        <img src={cart} alt="cart" />
        {numberOfProduct ? (
          <span className="cart-number">{numberOfProduct}</span>
        ) : null}
      </div>
      {alert}
    </>
  );
};

export default Cart;
