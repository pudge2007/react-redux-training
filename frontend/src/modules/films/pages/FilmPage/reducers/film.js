import { handleActions } from "redux-actions";

import * as actionCreators from "../actions";
import * as filmActionCreators from "../../../actions";

const defaultState = null;

const reducer = handleActions(
  {
    [actionCreators.getFilmSuccess](state, action) {
      return action.response.data || null;
    },
    [filmActionCreators.removeFilmState]() {
      return defaultState;
    }
  },
  defaultState
);

export default reducer;
