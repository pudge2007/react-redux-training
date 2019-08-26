import { handleActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = [
  {
    id: 1,
    title: "Побег из Шоушенка (1994)",
    eng: "The Shawshank Redemption",
    rating: "9.5"
  },
  {
    id: 2,
    title: "Зеленая миля (1999)",
    eng: "The Green Mile",
    rating: "9.5"
  }
];

const reducer = handleActions(
  {
    [actionCreators.getFilmsSuccess](state, action) {
      return defaultState;
    },

    [actionCreators.getFilmsFail](state, action) {
      return defaultState;
    }
  },
  defaultState
);

export default reducer;
