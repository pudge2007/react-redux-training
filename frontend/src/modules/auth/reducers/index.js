import { combineReducers } from "redux";

import isAuthenticated from "./isAuthenticated";
import user from "./user";

const reducer = combineReducers({
  isAuthenticated,
  user
});

export default reducer;
