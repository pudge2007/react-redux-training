import { handleActions } from "redux-actions";

import * as actionCreators from "../actions";
import * as filmActionCreators from "../../../actions";

const defaultState = [];

const reducer = handleActions(
  {
    [actionCreators.getCommentsSuccess](state, action) {
      return action.response.data;
    },
    [actionCreators.addCommentSuccess](state, action) {
      return [action.response.data, ...state];
    },
    [filmActionCreators.removeFilmState]() {
      return defaultState;
    }
  },
  defaultState
);

export default reducer;
