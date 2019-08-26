export const getIsPending = (state, request) => !!state.api[request.toString()];
