import { handleActions } from 'redux-actions';

import * as actionCreators from '../actions';
import { FILMS } from '../constants';

const defaultState = FILMS;

const reducer = handleActions(
    {
      [actionCreators.getFilmsSuccess](state, action) {
        return defaultState;
      },
  
      [actionCreators.getFilmsFail](state, action) {
        return defaultState;
      },
    },
    defaultState,
);

export default reducer;