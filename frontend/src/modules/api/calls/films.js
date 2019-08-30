import api from "../index";

export const getFilms = search => {
  return api.get("/films", {
    params: {
      ...(search ? { search: search } : {})
    }
  });
};

export const getFilm = id => api.get("/films/" + id);

export const getComments = film_id => {
  return api.get("/films/comments", {
    params: {
      film_id
    }
  });
};

export const addComment = payload => api.post("/films/comments", payload);

export const addRating = payload => api.post("/films/rating", payload);
