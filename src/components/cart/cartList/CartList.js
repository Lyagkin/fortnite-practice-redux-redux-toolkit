import { useDispatch, useSelector } from "react-redux";
import {
  togglingCart,
  removeProductByRedux,
  addingOrderProductByRedux,
  subtractingOrderProductByRedux,
} from "../../../actions";
import CartItem from "../cartItem/CartItem";
import { ReactComponent as Cross } from "../../../resources/icons/cross.svg";

import "./cartList.scss";

const CartList = () => {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const numberOfOrder = order.length;

  const totalPrice = order.reduce(
    (acc, curr) => acc + curr.price.finalPrice * curr.number,
    0,
  );

  const addingOrderProduct = (id) => {
    const newOrder = order.map((item) => {
      if (item.mainId === id) {
        return { ...item, number: item.number + 1 };
      } else {
        return item;
      }
    });

    dispatch(addingOrderProductByRedux(newOrder));
  };

  const subtractingOrderProduct = (id) => {
    const newOrder = order.map((item) => {
      if (item.mainId === id) {
        return { ...item, number: item.number > 0 ? item.number - 1 : 0 };
      } else {
        return item;
      }
    });

    dispatch(subtractingOrderProductByRedux(newOrder));
  };

  const removeProduct = (id) => {
    dispatch(removeProductByRedux(id));
  };

  return (
    <ul className="cart-list">
      <li className="cart-list-item active">
        Корзина
        <span className="cart-list-item-delete">
          <Cross className="cross" onClick={() => dispatch(togglingCart())} />
        </span>
      </li>
      {numberOfOrder ? (
        order.map((item) => (
          <CartItem
            key={item.mainId}
            removeProduct={() => removeProduct(item.mainId)}
            addingOrderProduct={() => addingOrderProduct(item.mainId)}
            subtractingOrderProduct={() => subtractingOrderProduct(item.mainId)}
            {...item}
          />
        ))
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
