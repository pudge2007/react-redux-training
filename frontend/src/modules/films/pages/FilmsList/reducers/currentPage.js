import { handleActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = 0;

const reducer = handleActions(
  {
    [actionCreators.getFilmsSuccess](state) {
      return state + 1;
    },
    [actionCreators.resetFilmsState]() {
      return defaultState;
    }
  },
  defaultState
);

export default reducer;
