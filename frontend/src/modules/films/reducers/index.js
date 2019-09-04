import { combineReducers } from "redux";

import list from "../pages/FilmsList/reducers";
import searchText from "../pages/FilmsList/reducers/search";
import byId from "../pages/FilmPage/reducers";

const reducer = combineReducers({
  list,
  searchText,
  byId
});

export default reducer;
