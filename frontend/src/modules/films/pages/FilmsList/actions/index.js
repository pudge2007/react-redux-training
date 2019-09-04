import { createAction } from "redux-actions";

export const getFilmsRequest = createAction("GET_FILMS_REQUEST");
export const getFilmsSuccess = createAction("GET_FILMS_SUCCESS");

export const setSearchText = createAction("SET_SEARCH_TEXT");

export const resetFilmsState = createAction("RESET_FILMS_STATE");
