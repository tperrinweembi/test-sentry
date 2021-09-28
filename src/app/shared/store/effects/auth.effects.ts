import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY, of } from "rxjs";
import {
  catchError,
  exhaustMap,
  map,
  switchMap,
  tap,
  withLatestFrom
} from "rxjs/operators";
import { User } from "../../models/user.model";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { AppState } from "../index.reducers";
import * as authActions from "../actions/auth.actions";
import * as authSelectors from "../selectors/auth.selectors";

@Injectable()
export class AuthEffects {
  /** Creates an instance of auth effects.
   * @param actions$
   * @param authService
   * @param router
   */
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UserService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.LOGIN_SUCCESS),
        tap(({ token }) => {
          localStorage.setItem("jwt", token);
          this.router.navigate(["/shop/profil"]);
        })
      ),
    { dispatch: false }
  );



  logoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.LOGOUT_SUCCESS),
        tap(({ anonymousToken }) => {
          localStorage.removeItem("user");
          localStorage.setItem("jwt", anonymousToken);
          this.router.navigate(["/shop"]);
        })
      ),
    { dispatch: false }
  );
}
