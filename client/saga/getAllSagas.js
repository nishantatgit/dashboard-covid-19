import fetchCardListSaga from "../components/organisms/CardList/CardList.saga";
import { all, fork, call, takeLatest } from "redux-saga/effects";
export default function* rootSaga() {
  console.log("starting root saga");
  yield fork(fetchCardListSaga);
  console.log("exiting root saga");
}
