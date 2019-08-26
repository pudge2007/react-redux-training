import { handleActions } from "redux-actions";

import * as signInActionCreators from "../pages/SignIn/actions";
import * as actionCreators from "../actions";

const defaultState = null;

export default handleActions(
  {
    [signInActionCreators.signInSuccess](state, action) {
      return action.response.data;
    },
    [actionCreators.logout]() {
      return defaultState;
    }
  },
  defaultState
);
