import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import CartList from "../cart/cartList/CartList";

const CartListWrapper = () => {
  const isCartShow = useSelector((state) => state.products.isCartShow);
  return (
    <CSSTransition
      in={isCartShow}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames="show-cart"
    >
      <CartList />
    </CSSTransition>
  );
};

export default CartListWrapper;
