import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";
import { persistReducer, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

import api from "modules/api/reducers";
import films from "./modules/films/reducers";
import modal from "./modules/common/ModalDialog/reducers";
import notifications from "./modules/common/Notifications/reducers";
import auth from "./modules/auth/reducers";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"]
};

const filmsPersistConfig = {
  key: "films",
  storage: storage,
  whitelist: ["searchText", "sortDirection"]
};

const rootReducer = history =>
  persistCombineReducers(rootPersistConfig, {
    form: formReducer,
    router: connectRouter(history),
    api,
    films: persistReducer(filmsPersistConfig, films),
    modal,
    notifications,
    auth
  });

export default rootReducer;
