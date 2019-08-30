import { createSelector } from "reselect";

export const getFilms = state => state.films.list;

export const getFilm = state => state.films.byId.film;

export const getFilmId = createSelector(
  getFilm,
  film => (film ? film.id : null)
);

export const getRating = state => state.films.byId.rating;

export const getComments = state => state.films.byId.comments;

export const getSearchText = state => state.films.searchText;
