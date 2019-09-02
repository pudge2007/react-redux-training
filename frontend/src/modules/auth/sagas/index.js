import { all } from "redux-saga/effects";

import signInSaga from "../pages/SignIn/sagas";
import signUpSaga from "../pages/SignUp/sagas";
import logoutSaga from "./logout";

function* authSaga() {
  yield all([
    signInSaga(),
    signUpSaga(),
    logoutSaga()
  ]);
}

export default authSaga;
