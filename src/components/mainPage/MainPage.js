import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMainPage, selectAll } from "./mainPageSlice";
import Spiner from "../spinner/Spiner";

import "./mainPage.scss";

const MainPage = () => {
  const mainPageLoadingStatus = useSelector(
    ({ mainPage }) => mainPage.mainPageLoadingStatus,
  );

  const dispatch = useDispatch();

  const img = useSelector(selectAll);

  useEffect(() => {
    dispatch(fetchMainPage());
  }, []);

  const spinner = mainPageLoadingStatus === "loading" ? <Spiner /> : null;
  const content =
    mainPageLoadingStatus === "idle" ? (
      <div className="main__wrapper">
        <h3 className="main__title">Добро пожаловать в мир FORTNITE!</h3>
        <div className="main__img">
          <img src={img[0].url} alt="maps" />
        </div>
      </div>
    ) : null;

  return (
    <div className="container">
      {spinner}
      {content}
    </div>
  );
};

export default MainPage;
