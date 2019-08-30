import { combineReducers } from "redux";

import film from "./film";
import rating from "../../../components/Raiting/reducer";
import comments from "../../../components/Comments/reducer";

const reducer = combineReducers({
  film,
  rating,
  comments
});

export default reducer;
