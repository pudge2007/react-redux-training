import { combineReducers } from "redux";

import result from "./result";
import total from "./total";
import searchText from "./search";
import currentPage from "./currentPage";

const reducer = combineReducers({
  result,
  total,
  currentPage,
  searchText
});

export default reducer;
