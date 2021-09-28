import { createAction, props } from "@ngrx/store";
import { Credentials, User } from "../../models/user.model";

///////////////////////////////////////////
export const LOGIN_TRY = createAction(
  "[Login Component] try login",
  props<{ credentials: Credentials }>()
);
export const LOGIN_SUCCESS = createAction(
  "[tryLogin$ Effect] login success",
  props<{ token: string }>()
);
export const LOGIN_ERROR = createAction(
  "[tryLogin$ Effect] login error",
  props<{ error: any }>()
);

///////////////////////////////////////////
export const GET_CURRENT_USER_TRY = createAction(
  "[Profil component] get current user"
);
export const GET_CURRENT_USER_SUCCESS = createAction(
  "[Profil Component] set current user",
  props<{ user: User }>()
);
export const SET_TOKEN = createAction(
  "[AuthService] set token",
  props<{ token: string | null }>()
);

///////////////////////////////////////////
export const LOGOUT_TRY = createAction("[Logout button] Logout current user");
export const LOGOUT_SUCCESS = createAction(
  "[tryLogout$ Effect] Logout success",
  props<{ anonymousToken: string }>()
);
export const LOGOUT_ERROR = createAction(
  "[tryLogout$ Effect] logout error",
  props<{ error: any }>()
);

//////////////////////////////////////////
export const BROWSER_REFRESH = createAction(
  "[Shop-workspace Component] Browser refresh",
  props<{ user: User }>()
);
