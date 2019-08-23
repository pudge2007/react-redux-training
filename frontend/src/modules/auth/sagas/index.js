import { call, put, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";

import * as actionCreators from "../actions";
import * as modalActionCreators from "modules/common/ModalDialog/actions";
import * as notificationActionCreators from "modules/common/Notifications/actions";
import { USER, SIGN_IN_MODAL } from "../constants";

const request = ({ login, password }) => {
  return new Promise((resolve, reject) => {
    return login === "bob" && password === "123"
      ? setTimeout(() => resolve(USER), 1000)
      : reject(new Error("Неверные данные"));
  });
};

function* signOut() {
  try {
    yield put(actionCreators.signOutSuccess());
    yield put(notificationActionCreators.removeAllNotifications());
    yield put(
      notificationActionCreators.successNotification(
        "Всего доброго до свидания"
      )
    );
    yield put(push("/"));
  } catch (error) {
    yield put(actionCreators.signOutFail());
    yield put(notificationActionCreators.errorNotification(error.message));
  }
}

function* signIn(action) {
  try {
    yield put(actionCreators.pendingData());
    const user = yield call(request, action.payload);
    yield signInSuccess(user);
  } catch (error) {
    yield put(actionCreators.signInFail());
    yield put(notificationActionCreators.errorNotification(error.message));
  }
}

function* signInSuccess(user) {
  yield put(actionCreators.signInSuccess(user));
  yield put(notificationActionCreators.removeAllNotifications());
  yield put(
    notificationActionCreators.successNotification("Вход успешно выполнен!")
  );
  yield put(modalActionCreators.toggleModal(SIGN_IN_MODAL.modalName));
  yield put(push("/account"));
}

function* sendRequest() {
  yield takeEvery(actionCreators.signInRequest, signIn);
  yield takeEvery(actionCreators.signOutRequest, signOut);
}

export default sendRequest;
