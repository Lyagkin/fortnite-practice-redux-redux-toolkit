import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import MainPage from "../mainPage/MainPage";
import Shop from "../shop/Shop";
import "./app.scss";
import NotFound from "../notFound/NotFound";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
