import { useDispatch, useSelector } from "react-redux";
import { togglingCart } from "../../shop/productSlice";
import CartItem from "../cartItem/CartItem";
import { ReactComponent as Cross } from "../../../resources/icons/cross.svg";

import "./cartList.scss";

const CartList = () => {
  const order = useSelector((state) => state.products.order);
  const dispatch = useDispatch();

  const numberOfOrder = order.length;

  const totalPrice = order.reduce(
    (acc, curr) => acc + curr.price.finalPrice * curr.number,
    0,
  );

  return (
    <ul className="cart-list">
      <li className="cart-list-item active">
        Корзина
        <span className="cart-list-item-delete">
          <Cross className="cross" onClick={() => dispatch(togglingCart())} />
        </span>
      </li>
      {numberOfOrder ? (
        order.map((item) => <CartItem key={item.mainId} {...item} />)
      ) : (
        <li className="cart-list-item">Корзина пуста</li>
      )}
      <li className="cart-list-item active">
        Общая стоимость: {totalPrice} руб.
      </li>
    </ul>
  );
};

export default CartList;
