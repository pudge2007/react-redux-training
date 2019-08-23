export const getIsLogin = (state) => !!Object.keys(state.auth.user).length;

export const getUser = (state) => state.auth.user;

export const getIsPending = (state) => state.auth.isPending;