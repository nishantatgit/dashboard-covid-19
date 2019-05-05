import express from "express";
import bodyParser from "body-parser";
import path from "path";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import StyleContext from "isomorphic-style-loader/StyleContext";

import { renderToString } from "react-dom/server";
import configs from "./serverConfigs";
import template from "./template";
import HomePage from "../client/pages/HomePage/HomePage";
import configureStore from "../client/store/configureStore";
import { FETCH_CARD_LIST_DATA_FROM_API } from "../client/components/organisms/CardList/CardList.actions";
import { END } from "redux-saga";
import fetchCardListSaga from "../client/components/organisms/CardList/CardList.saga";
import { put } from "redux-saga/effects";
import rootReducer from "../client/reducer/rootReducer";

//runSaga signature
// runSaga(iterator, {subscribe, dispatch}, [monitor])

const app = express();
const { port, lang, dir } = configs;

const store = configureStore(); //console.log('initialState ', initialState);

// function * mySaga(){
//   yield put( {
//     type : FETCH_CARD_LIST_DATA_FROM_API,
//     payload: [1,20]
//   });
// }

//mySaga().next();

/*const obj = {
  dispatch : store.dispatch,
  getState : store.getState,
  context: null
};


const sagaMiddleware = runSaga( obj ,fetchCardListSaga); */

//console.log('sagaMiddleware ', sagaMiddleware.queue.getTasks());

/*sagaMiddleware.then( function(){
  console.log('resolved');
}, function(){
  console.log('rejected');
})*/ const css = new Set(); // CSS for all rendered React components

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
  //store.dispatch(END);
  //console.log("allTasks: ", allTasks[0].toPromise());
  /*Promise.all(allTasks.map(task => task.toPromise())).then(() => {
    console.log("store state ", store.getState());
    res.send(template(lang, dir, content, css));
  }); */
  /*async function sendResponse() {
    await store.execSagaTasks(true, dispatch => {
      dispatch({
        type: FETCH_CARD_LIST_DATA_FROM_API,
        payload: [1, 20]
      });
    });
    res.send(template(lang, dir, content(), css));
  }*/

  function sendResponse() {
    console.log(" END -----> ", END);
    let sagaPromise = store.saga.toPromise();
    sagaPromise.then(function() {
      console.log("promise resolved");
      res.send(template(lang, dir, content(), css));
      console.log("response sent!");
    });
    store.dispatch({
      type: FETCH_CARD_LIST_DATA_FROM_API,
      payload: [1, 20]
    });
    store.dispatch(END);
  }

  sendResponse();

  //store.sagas.result();
  // setTimeout(function(){
  //   console.log('store state ', store.getState());
  // },5000);
  // res.send(template(lang, dir, content, css));
});

app.listen(port);

console.log(`server listening on port: ${port}`);

/*[dispatch(fetchCountries())]
    .map(async actions => await Promise.all(
      (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
      )
    );*/

//  new Promise()
