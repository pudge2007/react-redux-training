import { handleActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = "DESC";

const reducer = handleActions(
  {
    [actionCreators.setSortDirection](state, { payload }) {
      return payload;
    }
  },
  defaultState
);

export default reducer;
