import { handleActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = [];

const reducer = handleActions(
  {
    [actionCreators.getFilmsSuccess](state, action) {
      return action.response.data;
    }
  },
  defaultState
);

export default reducer;
