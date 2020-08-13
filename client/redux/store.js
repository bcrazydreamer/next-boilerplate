import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { createLogger } from "redux-logger";

var middlewares = [];
middlewares.push(thunk);
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "debug") {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

const middlewareThunk = applyMiddleware(...middlewares);

export default createStore(reducer, middlewareThunk);