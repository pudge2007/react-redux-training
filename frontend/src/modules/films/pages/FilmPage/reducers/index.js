import { handleActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = null;

const reducer = handleActions(
  {
    [actionCreators.getFilmByIdSuccess](state, action) {
      return action.response.data || null;
    },
    [actionCreators.setFilmRatingSuccess](state, action) {
      return { ...state, ...{ rating: action.response.data } };
    },
    [actionCreators.removeFilmState]() {
      return defaultState;
    }
  },
  defaultState
);

export default reducer;
