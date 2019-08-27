import api from "../index";

export const signIn = payload => {
  return api.post("/users/sign-in", payload);
};
