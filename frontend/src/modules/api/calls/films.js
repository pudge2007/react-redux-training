import api from "../index";

export const getFilms = () => api.get("/films");

export const getFilmById = id => api.get("/films/" + id);

export const setFilmRating = payload => api.post("/films/rating", payload);
