import { put, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";

import { logout } from "../actions";
import { successNotification, removeAllNotifications } from "modules/common/Notifications/actions";

function* redirectToHomePage() {
  yield put(removeAllNotifications());
  yield put(successNotification("Всего доброго до свидания"));
  yield put(push("/"));
}

function* watchRequest() {
  yield takeEvery(logout, redirectToHomePage);
}

export default watchRequest;
