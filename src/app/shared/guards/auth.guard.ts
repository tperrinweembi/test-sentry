import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthState } from "../store/reducers/auth.reducer";
import { isAnonymousSelector } from "../store/selectors/auth.selectors";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  /**
   * Creates an instance of auth guard.
   * @param {AuthService} authService
   * @param {Router} router
   */
  constructor(private router: Router, private authStore: Store<AuthState>) {}

  /** Guards returns false when user is anonymous
   * (anonymous = not logged in )
   * @param next
   * @param state
   * @returns {boolean} activate
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authStore.pipe(
      select(isAnonymousSelector),
      map((isAnonymous: boolean | null) => {
        if (isAnonymous) {
          this.router.navigate(["/shop/connexion"]);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
