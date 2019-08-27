import { createAction } from "redux-actions";

export const getFilmByIdRequest = createAction("GET_FILM_BY_ID_REQUEST");
export const getFilmByIdSuccess = createAction("GET_FILM_BY_ID_SUCCESS");
export const getFilmByIdFail = createAction("GET_FILM_BY_ID_FAIL");

export const removeFilmState = createAction("REMOVE_FILM_STATE");

export const setFilmRatingRequest = createAction("SET_FILM_RATING_REQUEST");
export const setFilmRatingSuccess = createAction("SET_FILM_RATING_SUCCESS");
export const setFilmRatingFail = createAction("SET_FILM_RATING_FAIL");
