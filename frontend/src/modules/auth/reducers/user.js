import { handleActions, combineActions } from "redux-actions";

import * as signInActionCreators from "../pages/SignIn/actions";
import * as signUpActionCreators from "../pages/SignUp/actions";
import * as actionCreators from "../actions";

const defaultState = null;

export default handleActions(
  {
    [combineActions(
      signInActionCreators.signInSuccess,
      signUpActionCreators.signUpSuccess
    )](state, action) {
      return action.response.data;
    },
    [actionCreators.logout]() {
      return defaultState;
    }
  },
  defaultState
);
