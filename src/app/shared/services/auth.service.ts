import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Credentials } from "../models/user.model";
import { AppState } from "../store/index.reducers";
import { Store } from "@ngrx/store";
import * as authActions from "../store/actions/auth.actions";

/** Authentication service
 */
@Injectable({
  providedIn: "root"
})
export class AuthService {
  /** Creates an instance of auth service.
   * @param {HttpClient} http http service to call API
   * @param {AppState} store ngrx store
   */
  constructor(private http: HttpClient, private store: Store<AppState>) {
    // this.checkToken();
  }

  /** Gets token from local storage, checks if token is from
   * anonymous or logged user, if no token is found then
   * anonymous token is requested to api and set into localStorage
   */
  private checkToken(): void {
    const token: string | null = localStorage.getItem("jwt");
    if (token) {
      // Dispatches found token from localStorage
      this.store.dispatch(authActions.SET_TOKEN({ token }));
    } else {
      this.getAnonymousToken().subscribe((anonymousToken: string) => {
        // Dispatches returned token for the anonymous user
        this.store.dispatch(authActions.SET_TOKEN({ token }));
        // Storages returned token
        localStorage.setItem("jwt", anonymousToken);
      });
    }
  }

  /** Login API call
   * @param {Credentials} credentials
   * @returns {Observable<string>} the token as an observable string
   */
  public login(credentials: Credentials): Observable<string> {
    const data = { credentials: credentials };
    return this.http.post<any>("/api/auth/login", data).pipe(
      map((response: any) => {
        const token: string = response.data;
        return token;
      })
    );
  }

  /** Gets anonymous token API call
   * @returns anonymous token
   */
  public getAnonymousToken(): Observable<string> {
    return this.http.get<string>("/api/anonym").pipe(
      map((response: any) => {
        const anonymousToken: string = response.data;
        return anonymousToken;
      })
    );
  }
}
