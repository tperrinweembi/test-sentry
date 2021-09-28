import { createReducer, on } from "@ngrx/store";
import { User } from "../../models/user.model";
import jwt_decode from "jwt-decode";
import * as authActions from "../actions/auth.actions";

export const AUTH_FETAURE_KEY = "auth";

// Declares auth state
export interface AuthState {
  user: User | null;
  token: string | null;
  error: any;
  isAnonymous: boolean | null;
}

// Sets initial anonymous status from storaged token
let storageIsAnonym: boolean | null = null;
const storageToken: string | null = localStorage.getItem("jwt");
if (storageToken) {
  const decoded: any = jwt_decode(storageToken);
  storageIsAnonym = decoded.isAnonymous;
}
const initialState: AuthState = {
  user: null,
  token: storageToken,
  error: null,
  isAnonymous: storageIsAnonym
};

export const authReducer = createReducer(
  initialState,
  on(
    /*REGISTER_ERROR,*/
    authActions.LOGIN_ERROR,
    authActions.LOGOUT_ERROR,
    (state, { error }) => {
      return {
        ...state,
        error: error
      };
    }
  ),
  on(authActions.LOGIN_SUCCESS, (state, { token }) => {
    return {
      ...state,
      token: token,
      error: null,
      isAnonymous: false
    };
  }),
  on(
    authActions.GET_CURRENT_USER_SUCCESS,
    authActions.BROWSER_REFRESH,
    (state, { user }) => {
      return {
        ...state,
        user: user
      };
    }
  ),
  on(authActions.SET_TOKEN, (state, { token }) => {
    let isAnonym: boolean | null = null;
    if (token) {
      const decoded: any = jwt_decode(token);
      isAnonym = decoded.isAnonymous;
    }
    return {
      ...state,
      token,
      isAnonymous: isAnonym
    };
  }),
  on(authActions.LOGOUT_SUCCESS, (state, { anonymousToken }) => {
    return {
      ...state,
      user: null,
      token: anonymousToken,
      isAnonymous: true
    };
  })
);
