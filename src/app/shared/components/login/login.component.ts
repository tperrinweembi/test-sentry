import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { Credentials } from "../../models/user.model";
import * as authActions from "../../store/actions/auth.actions";
import { AppState } from "../../store/index.reducers";

/** Login shared component for shop and backoffice
 */
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"]
})
export class LoginComponent implements OnInit {
  /** String input indicating if item is called in the shop or backoffice
   * @type {string}
   */
  @Input("workspace") workspace: string; // "shop" | "backoffice"
  /** Login form of login component
   */
  public loginForm: FormGroup;
  /** Login error
   */
  public error: any;

  /** Creates an instance of shop login component.
   * @param {FormBuilder} fb Angular form builder service
   * @param {AppState} store ngrx store
   */
  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  /** Angular OnInit
   */
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [""],
      password: [""]
    });
  }

  /** Tryes login
   */
  public tryLogin() {
    // Gets data from the login form
    const formData = this.loginForm.value;
    const credentials: Credentials = {
      email: formData.email,
      password: formData.password
    };

    // Dispatches try Login
    this.store.dispatch(authActions.LOGIN_TRY({ credentials }));
  }
}
