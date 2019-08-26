import { all } from 'redux-saga/effects';

import authSaga from 'modules/auth/sagas';
import apiCallsSaga from 'modules/api/sagas';

function* rootSaga() {
    yield all([
        apiCallsSaga(),
        authSaga()
    ]);
}

export default rootSaga;