import { createSelector } from "reselect";

export const getIsAuthenticated = state => state.auth.isAuthenticated;

export const getUser = state => state.auth.user;

export const getUserId = createSelector(
  getUser,
  user => (user ? user._id : null)
);
