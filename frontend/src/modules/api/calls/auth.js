import api from "../index";

export const signInRequest = payload => {
  return api.post("/signin", payload);
};

export const logoutRequest = () => {
  return api.post("/logout");
};
