import { handleActions } from "redux-actions";

import * as signInActionCreators from "../pages/SignIn/actions";
import * as actionCreators from "../actions";

const defaultState = null;

export default handleActions(
  {
    [signInActionCreators.signInSuccess](state, { payload }) {
      return payload;
    },
    [actionCreators.logout]() {
      return defaultState;
    }
  },
  defaultState
);
