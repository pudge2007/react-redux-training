import axios from "axios";

import { errorNotification } from "modules/common/Notifications/actions";
import { store } from "components/App";

let config = {
  baseURL: "http://localhost:5000/api/",
  timeout: 100000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Pragma: "no-cache"
  },
  params: {}
};

const api = axios.create(config);
api.interceptors.response.use(
  result => result,
  err => {
    const error = err.response;
    const message = error.data.message;
    store.dispatch(errorNotification(message));
    return Promise.reject(error);
  }
);

export default api;
