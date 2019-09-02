import { createAction } from "redux-actions";

export const signUpRequest = createAction("SIGN_UP_REQUEST");
export const signUpSuccess = createAction("SIGN_UP_SUCCESS");
export const signUpFail = createAction("SIGN_UP_FAIL");
