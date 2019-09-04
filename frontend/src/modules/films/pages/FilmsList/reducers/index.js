import { combineReducers } from "redux";

import result from "./result";
import total from "./total";
import currentPage from "./currentPage";

const reducer = combineReducers({
  result,
  total,
  currentPage
});

export default reducer;
