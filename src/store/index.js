import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers";

// const middleWare =
//   (extraArgument) =>
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       return action(dispatch, getState, extraArgument);
//     }
//     return next(action);
//   };

// const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(ReduxThunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__(),
//   ),
// );

const store = configureStore({
  reducer: productReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // eslint-disable-next-line
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
