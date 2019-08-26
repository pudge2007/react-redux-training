import { all } from "redux-saga/effects";

import signInSaga from "../pages/SignIn/sagas";
import logoutSaga from "./logout";

function* authSaga() {
  yield all([
    signInSaga(),
    logoutSaga()
  ]);
}

export default authSaga;
