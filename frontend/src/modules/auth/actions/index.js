import { createAction } from "redux-actions";

export const signInRequest = createAction("SIGN_IN_REQUEST");
export const signInSuccess = createAction("SIGN_IN_SUCCESS");
export const signInFail = createAction("SIGN_IN_FAIL");

export const signOutRequest = createAction("SIGN_OUT_REQUEST");
export const signOutSuccess = createAction("SIGN_OUT_SUCCESS");
export const signOutFail = createAction("SIGN_OUT_FAIL");

export const pendingData = createAction("PENDING_DATA");
