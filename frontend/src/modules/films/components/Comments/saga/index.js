import { put, takeEvery } from "redux-saga/effects";
import { reset } from "redux-form";

import {
  successNotification,
  removeAllNotifications
} from "modules/common/Notifications/actions";
import { COMMENT_FORM } from "../constants";
import { addCommentSuccess } from "../actions";

function* notify() {
  yield put(reset(COMMENT_FORM));
  yield put(removeAllNotifications());
  yield put(successNotification("Комментарий успешно добавлен!"));
}

function* successNotify() {
  yield takeEvery(addCommentSuccess, notify);
}

export default successNotify;
