import {all} from 'redux-saga/effects';

import ratingSaga from '../components/Raiting/saga';

function* filmsSaga() {
  yield all([
    ratingSaga()
  ]);
};

export default filmsSaga;