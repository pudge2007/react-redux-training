import { createAction } from 'redux-actions';

export const getFilmsRequest = createAction('GET_FILMS_REQUEST');
export const getFilmsSuccess = createAction('GET_FILMS_SUCCESS');
export const getFilmsFail = createAction('GET_FILMS_FAIL');