import { combineReducers } from "redux";

import list from "../pages/FilmsList/reducers";
import searchText from "../pages/FilmsList/reducers/search";
import sortDirection from "../pages/FilmsList/reducers/sort";
import byId from "../pages/FilmPage/reducers";

const reducer = combineReducers({
  list,
  searchText,
  sortDirection,
  byId
});

export default reducer;
