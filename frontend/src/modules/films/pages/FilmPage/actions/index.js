import { createAction } from "redux-actions";

export const getFilmByIdRequest = createAction("GET_FILM_BY_ID_REQUEST");
export const getFilmByIdSuccess = createAction("GET_FILM_BY_ID_SUCCESS");

export const removeFilmState = createAction("REMOVE_FILM_STATE");
