import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { switchMap } from "rxjs/operators";
import { User } from "src/app/shared/models/user.model";
import { AuthService } from "src/app/shared/services/auth.service";
import { AppState } from "src/app/shared/store/index.reducers";
import { Store, select } from "@ngrx/store";
// import { RegisterTry } from "src/app/shared/store/auth/auth.actions";
import { errorAuthSelector } from "src/app/shared/store/selectors/auth.selectors";

/** Register component
 */
@Component({
  selector: "app-shop-register",
  templateUrl: "./shop-register.component.html",
  styleUrls: ["./shop-register.component.sass"]
})
export class ShopRegisterComponent implements OnInit, OnDestroy {
  /** All subscriptions handler to unsubscribe all at once
   */
  private subscriptions = new Subscription();
  /** Register form
   */
  public registerForm: FormGroup;
  /** Register error
   */
  public error$: Observable<string>;

  /** Creates an instance of shop register component.
   * @param fb
   */
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  /** Angular OnInit
   */
  ngOnInit() {
    this.registerForm = this.fb.group({
      lastName: [""],
      firstName: [""],
      email: [""],
      password: [""],
      confirmPassword: [""]
    });

    // Gets error as observable from store
    this.error$ = this.store.pipe(select(errorAuthSelector));
  }

  /** Call to auth service's register
   */
  public tryRegister(): void {
    const formData = this.registerForm.value;
    const user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      credentials: {
        email: formData.email,
        password: formData.password
      }
    };

    // this.store.dispatch(new RegisterTry(user));

    // const formData = this.registerForm.value;
    // const user = {
    //   firstName: formData.firstName,
    //   lastName: formData.lastName,
    //   credentials: {
    //     email: formData.email,
    //     password: formData.password
    //   }
    // };

    // this.subscriptions.add(
    //   this.authService.register(user).subscribe(
    //     () => {
    //       this.router.navigate(["/shop/profil"]);
    //     },
    //     err => {
    //       this.error = err.error;
    //     }
    //   )
    // );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
