import { combineActions, handleActions } from "redux-actions";

import * as signInActionCreators from "../pages/SignIn/actions";
import * as actionCreators from "../actions";

const defaultState = false;

const reducer = handleActions(
  {
    [signInActionCreators.signInSuccess]() {
      return true;
    },
    [combineActions(signInActionCreators.signInFail, actionCreators.logout)]() {
      return defaultState;
    }
  },
  defaultState
);

export default reducer;
