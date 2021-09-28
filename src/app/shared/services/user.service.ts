import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  /** Creates an instance of user service.
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**  Gets current user
   * @returns current user
   */
  public getCurrentUser(): Observable<User> {
    return this.http.get<User>("/api/users/current").pipe(
      map((response: any) => {
        const user: User = response.data;
        return user;
      })
    );
  }
}
