import { handleActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = [];

const reducer = handleActions(
  {
    [actionCreators.getFilmsSuccess](state, action) {
      return [...state, ...action.response.data.result];
    },
    [actionCreators.resetFilmsState]() {
      return defaultState;
    }
  },
  defaultState
);

export default reducer;
