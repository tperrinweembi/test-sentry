import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { NgxSpinnerService } from "ngx-spinner";
import { tap } from "rxjs/operators";
import * as authActions from "../actions/auth.actions";

@Injectable()
export class SpinnerEffects {
  constructor(private actions$: Actions, private spinner: NgxSpinnerService) {}

  spinnerOn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.LOGIN_TRY),
        tap(() => this.spinner.show())
      ),
    { dispatch: false }
  );

  spinnerOff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.LOGIN_SUCCESS, authActions.LOGIN_ERROR),
        tap(() => this.spinner.hide())
      ),
    { dispatch: false }
  );
}
