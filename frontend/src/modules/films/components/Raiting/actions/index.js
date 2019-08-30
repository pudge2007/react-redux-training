import { createAction } from "redux-actions";

export const setRatingAfterFilmLoaded = createAction("SET_RATING_AFTER_FILM_LOADED");

export const addRatingRequest = createAction("ADD_RATING_REQUEST");
export const addRatingSuccess = createAction("ADD_RATING_SUCCESS");
