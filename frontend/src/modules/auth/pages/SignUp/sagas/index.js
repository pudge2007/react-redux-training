import { put, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";

import * as actionCreators from "../actions";
import * as modalActionCreators from "modules/common/ModalDialog/actions";
import { successNotification } from "modules/common/Notifications/actions";
import { AUTH_MODAL } from "../../../constants";

function* redirectToAccount() {
  yield put(successNotification("Регистрация прошла успешно!"));
  yield put(modalActionCreators.toggleModal(AUTH_MODAL.modalName));
  yield put(push("/account"));
}

function* watchRequest() {
  yield takeEvery(actionCreators.signUpSuccess, redirectToAccount);
}

export default watchRequest;
