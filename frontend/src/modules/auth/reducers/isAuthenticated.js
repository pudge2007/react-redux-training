import { combineActions, handleActions } from "redux-actions";

import * as signInActionCreators from "../pages/SignIn/actions";
import * as signUpActionCreators from "../pages/SignUp/actions";
import * as actionCreators from "../actions";

const defaultState = false;

const reducer = handleActions(
  {
    [combineActions(
      signInActionCreators.signInSuccess,
      signUpActionCreators.signUpSuccess
    )]() {
      return true;
    },
    [combineActions(
      signInActionCreators.signInFail,
      signUpActionCreators.signUpFail,
      actionCreators.logout
    )]() {
      return defaultState;
    }
  },
  defaultState
);

export default reducer;
