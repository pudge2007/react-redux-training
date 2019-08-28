import { all } from 'redux-saga/effects';

import authSaga from 'modules/auth/sagas';
import apiCallsSaga from 'modules/api/sagas';
import filmsSaga from 'modules/films/sagas';

function* rootSaga() {
    yield all([
        apiCallsSaga(),
        authSaga(),
        filmsSaga()
    ]);
}

export default rootSaga;