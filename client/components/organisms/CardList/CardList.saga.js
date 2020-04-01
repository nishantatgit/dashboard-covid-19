import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  FETCH_CARD_LIST_DATA_FROM_API,
  SET_CARD_LIST
} from "./CardList.actions";
import constants from "../../../../constants";

export default function* fetchCardListSaga() {
  yield takeLatest(FETCH_CARD_LIST_DATA_FROM_API, fetchDataFromAPI);
}

function* fetchDataFromAPI(action) {
  const { payload } = action;
  const response = yield axios.get(
    `${constants.API_URL}/hotels/${payload[0]}/${payload[1]}`
  );
  if (response.status === 200) {
    yield put({
      type: SET_CARD_LIST,
      payload: response.data
    });
  }
}
