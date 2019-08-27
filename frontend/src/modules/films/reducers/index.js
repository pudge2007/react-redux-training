import { combineReducers } from "redux";

import list from "../pages/FilmsList/reducers";
import byId from "../pages/FilmPage/reducers";

const reducer = combineReducers({
  list,
  byId
});

export default reducer;
