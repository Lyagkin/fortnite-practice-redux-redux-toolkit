import Header from "../header/Header";
import Footer from "../footer/Footer";
import Shop from "../shop/Shop";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Shop />
      <Footer />
    </div>
  );
};

export default App;
