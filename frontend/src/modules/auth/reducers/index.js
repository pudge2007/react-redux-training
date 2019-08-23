import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = {
  user: {},
  isPending: false
};

const reducer = handleActions(
  {
    [actionCreators.pendingData](state) {
      return { ...state, ...{ isPending: true } };
    },
    [actionCreators.signInSuccess](state, { payload }) {
      return { ...state, ...{ user: payload, isPending: false } };
    },
    [combineActions(
      actionCreators.signInFail,
      actionCreators.signOutFail,
      actionCreators.signOutSuccess
    )]() {
      return defaultState;
    }
  },
  defaultState
);

export default reducer;
