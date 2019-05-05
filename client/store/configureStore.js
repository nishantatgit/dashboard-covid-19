import { createStore, applyMiddleware } from "redux";
import "babel-polyfill";
import createSagaMiddleware from "redux-saga";
import { END } from "redux-saga";

import initialState from "./initialState";
import rootReducer from "../reducer/rootReducer";
import spinSaga from "../saga/spinSaga";
import rootSaga from "../saga/getAllSagas";

export default function configureStore() {
  const sagaMiddleWare = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleWare)
  );
  store.runSaga = () => {
    // Avoid running twice
    if (store.saga) return;
    store.saga = sagaMiddleWare.run(rootSaga);
  };

  /*store.stopSaga = async () => {
    // Avoid running twice
    if (!store.saga) return;
    store.dispatch(END);
    await store.saga.toPromise();
    console.log("after await store.saga.toPromise;");
    store.saga = null;
  };

  store.execSagaTasks = async (isServer, tasks) => {
    // run saga
    store.runSaga();
    // dispatch saga tasks
    tasks(store.dispatch);
    // Stop running and wait for the tasks to be done
    await store.stopSaga();
    // Re-run on client side
    if (!isServer) {
      store.runSaga();
    }
  }; */

  store.sagas = store.saga;

  store.runSaga();

  //store.sagas = sagaMiddleWare.run(rootSaga); //spinSaga(sagaMiddleWare, rootSaga);
  return store;
}
