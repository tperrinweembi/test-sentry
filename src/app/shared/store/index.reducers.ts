import { Action, ActionReducerMap } from "@ngrx/store";
import {
  authReducer,
  AuthState,
  AUTH_FETAURE_KEY
} from "./reducers/auth.reducer";
import { RouterReducerState, routerReducer } from "@ngrx/router-store";
import { AppRouterState } from "./router.helper";
import { InjectionToken } from "@angular/core";

// Root app state
export interface AppState {
  [AUTH_FETAURE_KEY]: AuthState;
  routing: RouterReducerState<AppRouterState>;
}

// prettier-ignore
// LIST OF REDUCERS
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>
("Root reducers token", {
factory: () => ({
  [AUTH_FETAURE_KEY]: authReducer,
  routing: routerReducer
})
});
