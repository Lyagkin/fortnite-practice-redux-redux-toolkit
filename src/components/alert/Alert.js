import { useSelector, useDispatch } from "react-redux";
import { showAlertName } from "../shop/productSlice";
import { useEffect } from "react";

import "./alert.scss";

const Alert = () => {
  const alertName = useSelector((state) => state.products.alertName);
  const dispatch = useDispatch();

  const closeAlert = () => {
    dispatch(showAlertName());
  };

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [alertName]);

  return (
    <div className="alert-container">
      <span className="alert-container-item">
        {alertName} добавлен в корзину
      </span>
    </div>
  );
};

export default Alert;
