import { handleAction } from 'redux-actions';

import * as actionCreators from '../actions';

const defaultState = {};

const reducer = handleAction(
    actionCreators.toggleModal,
    (state, {payload}) => {
        return {...state, [payload]: !(!!state[payload])}
    },
    defaultState
);

export default reducer;