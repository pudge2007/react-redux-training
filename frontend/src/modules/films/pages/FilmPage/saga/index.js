import { put, takeEvery } from "redux-saga/effects";

import { getFilmSuccess } from "../actions";
import { setRatingAfterFilmLoaded } from "../../../components/Raiting/actions";

function* setRating(action) {
  yield put(setRatingAfterFilmLoaded(action.response.data.rating));
}

function* successNotify() {
  yield takeEvery(getFilmSuccess, setRating);
}

export default successNotify;
