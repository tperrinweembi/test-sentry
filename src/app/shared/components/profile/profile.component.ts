import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { Store, select } from "@ngrx/store";
// import { getCurrentUser } from "../../store/auth/auth.actions";
// import { UserState } from "../../store/auth/auth.reducer";
import { map } from "rxjs/operators";
import { AppState } from "../../store/index.reducers";
import { currentUserSelector } from "../../store/selectors/auth.selectors";
import * as authActions from "../../store/actions/auth.actions";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.sass"]
})
export class ProfileComponent implements OnInit {
  /** String input indicating if item is called in the shop or backoffice
   * @type {string}
   */
  @Input("workspace") workspace: string; // "shop" | "backoffice"

  /** Gets current user retrieved from  store's currentUser
   */
  public currentUser$: Observable<User | null>;

  /** Creates an instance of profile component.
   * @param {AppState} store ngrx store
   */
  constructor(private store: Store<AppState>) {}

  /** Angular OnInit
   */
  ngOnInit() {

  }
}
