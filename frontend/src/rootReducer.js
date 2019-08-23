import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import films from './modules/films/reducers';
import modal from './modules/common/ModalDialog/reducers';
import notifications from './modules/common/Notifications/reducers';
import auth from './modules/auth/reducers';

const rootReducer = (history) => combineReducers({
    form: formReducer,
    router: connectRouter(history),
    films,
    modal,
    notifications,
    auth
});

export default rootReducer;