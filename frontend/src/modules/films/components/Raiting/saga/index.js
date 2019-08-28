import { put, takeEvery } from "redux-saga/effects";

import { setFilmRatingSuccess } from "../actions";
import { successNotification, removeAllNotifications } from "modules/common/Notifications/actions";

function* notify() {
  yield put(removeAllNotifications());
  yield put(successNotification("Ваш рейтинг учтен!"));
}

function* watchRequest() {
  yield takeEvery(setFilmRatingSuccess, notify);
}

export default watchRequest;
