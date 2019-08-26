import { createAction } from "redux-actions";

export const signInRequest = createAction("SIGN_IN_REQUEST");
export const signInSuccess = createAction("SIGN_IN_SUCCESS");
export const signInFail = createAction("SIGN_IN_FAIL");
