import { useDispatch } from "react-redux";

import {
  removeProductByRedux,
  addingOrderProductByRedux,
  subtractingOrderProductByRedux,
} from "../../../actions";

import { useMemo } from "react";
import cross from "../../../resources/icons/cross.svg";

import "./cartItem.scss";

const CartItem = (props) => {
  const { mainId, displayName, price, number } = props;

  const dispatch = useDispatch();

  const buttons = [
    {
      id: "1",
      className: "button-number",
      action: "adding",
      sign: "+",
    },
    {
      id: "2",
      className: "button-number",
      action: "subtracting",
      sign: "-",
    },
  ];

  const elements = (arr) => {
    return arr.map((item) => (
      <button
        key={item.id}
        className={item.className}
        onClick={() => {
          if (item.action === "adding") {
            dispatch(addingOrderProductByRedux(mainId));
          } else {
            dispatch(subtractingOrderProductByRedux(mainId));
          }
        }}
      >
        {item.sign}
      </button>
    ));
  };

  const memoResult = useMemo(() => elements(buttons), [buttons]);

  return (
    <li className="cart-list-item">
      <div className="description-wrapper">
        {displayName} x{number} = {price.finalPrice * number}
        <div className="button-wrapper">{memoResult}</div>
      </div>

      <span className="cart-list-item-delete">
        <img
          src={cross}
          alt="cross"
          onClick={() => dispatch(removeProductByRedux(mainId))}
        />
      </span>
    </li>
  );
};

export default CartItem;
