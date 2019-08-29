import { handleActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = "";

const reducer = handleActions(
  {
    [actionCreators.setSearchText](state, { payload }) {
      return payload;
    }
  },
  defaultState
);

export default reducer;
