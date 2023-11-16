import spinner from "../../resources/img/spinner.gif";

import "./spinner.scss";

const Spiner = () => {
  return (
    <div>
      <img className="spinner" src={spinner} alt="spinner" />
    </div>
  );
};

export default Spiner;
