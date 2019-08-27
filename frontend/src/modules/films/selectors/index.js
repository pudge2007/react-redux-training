import { createSelector } from "reselect";

export const getFilms = state => state.films.list;

export const getFilm = state => state.films.byId;

export const getFilmId = createSelector(
  getFilm,
  film => film ? film.id : null
);
