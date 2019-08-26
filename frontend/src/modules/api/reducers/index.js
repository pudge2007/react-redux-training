import { handleActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = {};

const reducer = handleActions(
  {
    [actionCreators.setIsFetching](state, { payload }) {
      return state[payload]
        ? { ...state, ...{ [payload]: true } }
        : { ...state, [payload]: true };
    },
    [actionCreators.removeIsFetching](state, { payload }) {
      return state[payload]
        ? { ...state, ...{ [payload]: false } }
        : { ...state, [payload]: false };
    }
  },
  defaultState
);

export default reducer;
