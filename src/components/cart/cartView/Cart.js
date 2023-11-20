import { useDispatch, useSelector } from "react-redux";
import { togglingCart } from "../../shop/productSlice";
import Alert from "../../alert/Alert";
import cart from "../../../resources/icons/cart.svg";

import "./cart.scss";

const Cart = () => {
  const order = useSelector((state) => state.products.order);
  const alertName = useSelector((state) => state.products.alertName);

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
