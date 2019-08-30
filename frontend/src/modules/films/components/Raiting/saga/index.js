import { put, takeEvery } from "redux-saga/effects";

import { addRatingSuccess } from "../actions";
import { successNotification, removeAllNotifications } from "modules/common/Notifications/actions";

function* notify() {
  yield put(removeAllNotifications());
  yield put(successNotification("Ваш рейтинг учтен!"));
}

function* successNotify() {
  yield takeEvery(addRatingSuccess, notify);
}

export default successNotify;
