import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { AlertService } from "@full-fledged/alerts";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { exhaustMap, tap } from "rxjs/operators";
import * as authActions from "../actions/auth.actions";

@Injectable()
export class AlertEffects {
  constructor(
    private actions$: Actions,
    private alert: AlertService,
    private router: Router,
    private authService: AuthService
  ) {}

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.LOGIN_SUCCESS),
        tap(() => this.alert.success("You are logged in."))
      ),
    { dispatch: false }
  );

  loginError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.LOGIN_ERROR),
        tap(() => this.alert.danger("Error while login."))
      ),
    { dispatch: false }
  );

  logoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.LOGOUT_SUCCESS),
        tap(() => this.alert.info("You are logged gout."))
      ),
    { dispatch: false }
  );

  logoutError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.LOGOUT_ERROR),
        tap(() => this.alert.danger("Error while logout."))
      ),
    { dispatch: false }
  );
}
