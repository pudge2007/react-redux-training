import api from "../index";

export const signIn = payload => api.post("/users/sign-in", payload);

export const signUp = payload => api.post("/users/sign-up", payload);
