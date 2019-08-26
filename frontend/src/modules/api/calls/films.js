import api from "../index";

export const getFilmsRequest = payload => {
  return api.get("/films");
};
