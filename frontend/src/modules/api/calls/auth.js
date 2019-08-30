import api from "../index";

export const signIn = payload => api.post("/users/sign-in", payload);
