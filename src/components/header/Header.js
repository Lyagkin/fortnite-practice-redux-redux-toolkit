import { Link } from "react-router-dom/cjs/react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <nav className="navigate">
      <div className="navigate-wrapper">
        <a href="#">Fortnite shop</a>
        <ul>
          <li>
            <a href="#">Repo</a>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
