import {all} from 'redux-saga/effects';

import filmSaga from '../pages/FilmPage/saga';
import ratingSaga from '../components/Raiting/saga';
import commentsSaga from '../components/Comments/saga';

function* filmsSaga() {
  yield all([
    filmSaga(),
    ratingSaga(),
    commentsSaga()
  ]);
};

export default filmsSaga;