import { handleActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = [];
let keys = 1;

const reducer = handleActions(
  {
    [actionCreators.successNotification](state, { payload }) {
      keys++;
      return [
        ...state,
        {
          key: keys,
          message: payload,
          options: { key: keys, variant: "success" }
        }
      ];
    },
    [actionCreators.errorNotification](state, { payload }) {
      keys++;
      return [
        ...state,
        {
          key: keys,
          message: payload,
          options: { key: keys, variant: "error" }
        }
      ];
    },
    [actionCreators.removeNotification](state, { payload }) {
      return state.filter(n => n.key !== payload);
    },
    [actionCreators.removeAllNotifications](state, { payload }) {
      return state.map(n => ({ ...n, dismissed: true }));
    }
  },
  defaultState
);

export default reducer;
