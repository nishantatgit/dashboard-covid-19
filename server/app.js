import express from "express";
import bodyParser from "body-parser";
import React from "react";
import { Provider } from "react-redux";
import StyleContext from "isomorphic-style-loader/StyleContext";

import { renderToString } from "react-dom/server";
import configs from "./serverConfigs";
import template from "./template";
import HomePage from "../client/pages/HomePage/HomePage";
import configureStore from "../client/store/configureStore";
import { FETCH_CARD_LIST_DATA_FROM_API } from "../client/components/organisms/CardList/CardList.actions";
import { END } from "redux-saga";

//runSaga signature
// runSaga(iterator, {subscribe, dispatch}, [monitor])

const app = express();
const { port, lang, dir } = configs;

const store = configureStore();

const css = new Set();

const insertCss = function(...styles) {
  styles.forEach(function(style) {
    css.add(style._getCss());
  });
};

const content = () =>
  renderToString(
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <HomePage />
      </StyleContext.Provider>
    </Provider>
  );

app.use(express.static("./public"));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,X-Access-Token,X-Key"
  );
  next();
});

app.get("/", function(req, res) {
  function sendResponse() {
    let sagaPromise = store.saga.toPromise();
    sagaPromise.then(function() {
      res.send(template(lang, dir, content(), css));
    });
    store.dispatch({
      type: FETCH_CARD_LIST_DATA_FROM_API,
      payload: [1, 20]
    });
    store.dispatch(END);
  }
  sendResponse();
});

app.listen(port);

console.log(`server listening on port: ${port}`);
