import fetchCardListSaga from "../components/organisms/CardList/CardList.saga";
import { all, fork, call, takeLatest } from "redux-saga/effects";
export default function* rootSaga() {
  yield fork(fetchCardListSaga);
}
