import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger"; // middleware package to log actions and state to console
import thunkMiddleware from "redux-thunk"; // middleware to handle async operations
import { searchFriends } from "./reducers";
import "./index.css";
import "tachyons";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const logger = createLogger(); // create logger instance to listen and log actions and state
const store = createStore(
  searchFriends,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
