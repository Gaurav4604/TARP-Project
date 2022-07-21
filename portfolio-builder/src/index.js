import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import App from "./App";
import reduxThunk from "redux-thunk";

import store from "./redux/store";

const reduxStore = createStore(store, applyMiddleware(reduxThunk));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
);
