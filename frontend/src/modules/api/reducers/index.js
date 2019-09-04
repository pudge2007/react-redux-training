import { handleActions } from "redux-actions";
import { omit } from "lodash";
import * as actionCreators from "../actions";

const defaultState = {};

const reducer = handleActions(
  {
    [actionCreators.setIsPending](state, { payload }) {
      return state[payload]
        ? { ...state, ...{ [payload]: true } }
        : { ...state, [payload]: true };
    },
    [actionCreators.removeIsPending](state, { payload }) {
      return omit(state, payload);
    }
  },
  defaultState
);

export default reducer;
