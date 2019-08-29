import { combineReducers } from "redux";

import list from "../pages/FilmsList/reducers/films";
import searchText from "../pages/FilmsList/reducers/search";
import byId from "../pages/FilmPage/reducers";


const reducer = combineReducers({
  list,
  byId,
  searchText
});

export default reducer;
