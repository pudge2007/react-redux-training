import { call, put, takeEvery } from "redux-saga/effects";
import camelCase from "lodash/camelCase";

import * as notificationActionCreators from "modules/common/Notifications/actions";
import * as calls from "../calls";
import { removeIsPending, setIsPending } from "../actions";

const startPostfix = "_REQUEST";
const successPostfix = "_SUCCESS";
const failPostfix = "_FAIL";

function* sendRequest(action) {
  let callMethod = calls[camelCase(action.type)];
  if (!callMethod) {
    throw new Error(`no api method for action ${action.type}`);
  }

  yield put(setIsPending(action.type));

  try {
    let response = yield call(callMethod, action.payload);
    yield put(notificationActionCreators.removeAllNotifications());
    yield put(createSuccessAction(action, response));
  } catch (error) {
    yield put(createFailAction(action, error));
  }
}

function createSuccessAction(action, response) {
  const { type, payload } = action;

  return {
    type: type.replace(startPostfix, successPostfix),
    payload,
    response
  };
}

function createFailAction(action, error) {
  const { payload, type } = action;
  const { response } = error;

  return {
    type: type.replace(startPostfix, failPostfix),
    payload,
    response,
    error
  };
}

function* requestEnded(action) {
  const endPostfix = action.type.endsWith(successPostfix)
    ? successPostfix
    : failPostfix;
  const actionType = action.type.replace(endPostfix, startPostfix);
  yield put(removeIsPending(actionType));
}

const isApiCallAction = action => {
  return action.type.endsWith(startPostfix);
};

const isApiCallEndedAction = action => {
  return (
    action.type.endsWith(successPostfix) || action.type.endsWith(failPostfix)
  );
};

function* apiCallsSaga() {
  yield takeEvery(isApiCallAction, sendRequest);
  yield takeEvery(isApiCallEndedAction, requestEnded);
}

export default apiCallsSaga;
