import { createStore, applyMiddleware } from 'redux';
import 'babel-polyfill';
import createSagaMiddleware from 'redux-saga';

import initialState from './initialState';
import rootReducer from '../reducer/rootReducer';
import rootSaga from '../saga/getAllSagas';

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
  store.sagas = store.saga;
  store.runSaga();
  return store;
}
