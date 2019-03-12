import { createStore, applyMiddleware } from 'redux';
import 'babel-polyfill';
import createSagaMiddleware from 'redux-saga';


import initialState from './initialState';
import rootReducer from '../reducer/rootReducer';
import spinSaga from '../saga/spinSaga';
import sagaList from '../saga/getAllSagas';

export default function configureStore(){
  const sagaMiddleWare = createSagaMiddleware();
  const store =  createStore(rootReducer, initialState, applyMiddleware(sagaMiddleWare));
  store.sagas = spinSaga(sagaMiddleWare,sagaList);
  return store ;
}

