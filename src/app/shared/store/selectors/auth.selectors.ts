import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, AUTH_FETAURE_KEY } from "../reducers/auth.reducer";

export const authSelector = createFeatureSelector<AuthState>(AUTH_FETAURE_KEY);

export const errorAuthSelector = createSelector(
  authSelector,
  (authState: AuthState) => authState.error
);

export const tokenSelector = createSelector(
  authSelector,
  (authState: AuthState) => authState.token
);

export const isAnonymousSelector = createSelector(
  authSelector,
  (authState: AuthState) => authState.isAnonymous
);

export const currentUserSelector = createSelector(
  authSelector,
  (authState: AuthState) => authState.user
);
