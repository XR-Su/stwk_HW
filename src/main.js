/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/9
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./common/rootReducer";
import Page from "./page.js";
import "../assets/fonts/fonts.css";
import "./style/index.less";
import "./main.css";
import "react-app-polyfill/ie11";

const middlewares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

const Root = (
  <Provider store={store}>
    <Page />
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
