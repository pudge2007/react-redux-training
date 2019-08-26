import { handleActions } from "redux-actions";

import * as actionCreators from "../pages/FilmsList/actions";

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
