import api from "../index";

export const getFilms = search => {
  return api.get("/films", {
    params: {
      ...(search ? { search: search } : {})
    }
  });
};

export const getFilmById = id => api.get("/films/" + id);

export const setFilmRating = payload => api.post("/films/rating", payload);
