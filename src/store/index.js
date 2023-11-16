import { createStore, compose, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "../reducers";

const middleWare =
  (extraArgument) =>
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  };

const store = createStore(
  reducer,
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
