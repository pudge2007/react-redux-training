import { handleActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = 0;

const reducer = handleActions(
  {
    [actionCreators.getFilmsSuccess](state, action) {
      return action.response.data.total;
    },
    [actionCreators.resetFilmsState]() {
      return defaultState;
    }
  },
  defaultState
);

export default reducer;
