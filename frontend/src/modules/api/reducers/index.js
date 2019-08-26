import { handleActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = {};

const reducer = handleActions(
  {
    [actionCreators.setIsPending](state, { payload }) {
      return state[payload]
        ? { ...state, ...{ [payload]: true } }
        : { ...state, [payload]: true };
    },
    [actionCreators.removeIsPending](state, { payload }) {
      return state[payload]
        ? { ...state, ...{ [payload]: false } }
        : { ...state, [payload]: false };
    }
  },
  defaultState
);

export default reducer;
