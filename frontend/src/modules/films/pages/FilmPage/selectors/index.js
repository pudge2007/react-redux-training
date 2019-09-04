import { createSelector } from "reselect";

export const getFilm = state => state.films.byId.film;

export const getFilmId = createSelector(
  getFilm,
  film => (film ? film.id : null)
);

export const getRating = state => state.films.byId.rating;

export const getComments = state => state.films.byId.comments;