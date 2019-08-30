import { handleActions } from "redux-actions";

import * as actionCreators from "../actions";
import * as filmActionCreators from "../../../actions";

const defaultState = 0;

const reducer = handleActions(
  {
    [actionCreators.setRatingAfterFilmLoaded](state, { payload }) {
      return payload;
    },
    [actionCreators.addRatingSuccess](state, action) {
      return action.response.data;
    },
    [filmActionCreators.removeFilmState]() {
      return defaultState;
    }
  },
  defaultState
);

export default reducer;
