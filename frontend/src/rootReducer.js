import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import api from 'modules/api/reducers';
import films from './modules/films/reducers';
import modal from './modules/common/ModalDialog/reducers';
import notifications from './modules/common/Notifications/reducers';
import auth from './modules/auth/reducers';

const persistConfig = {
    key: 'root',
    storage: storage,
    whiteList: [films, auth]
   };



const rootReducer = (history) => persistCombineReducers(persistConfig, {
    form: formReducer,
    router: connectRouter(history),
    api,
    films,
    modal,
    notifications,
    auth
});

export default rootReducer;