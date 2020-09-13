import rootReducer from "./rootReducer";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initState = {};
const middleware = [thunk];

const composeEnhancers =
  (typeof window != "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  initState,
  compose(composeEnhancers(applyMiddleware(...middleware)))
);

export default store;
