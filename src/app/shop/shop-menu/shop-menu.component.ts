import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { LOGOUT_TRY } from "src/app/shared/store/actions/auth.actions";
import { AppState } from "src/app/shared/store/index.reducers";
import { isAnonymousSelector } from "src/app/shared/store/selectors/auth.selectors";

@Component({
  selector: "app-shop-menu",
  templateUrl: "./shop-menu.component.html",
  styleUrls: ["./shop-menu.component.sass"]
})
export class ShopMenuComponent implements OnInit {
  /** JWT token get from auth service
   */
  public isAnonymous$: Observable<boolean | null>;

  /** Creates an instance of shop menu component.
   * @param {AppState} store ngrx store
   */
  constructor(private store: Store<AppState>) {}

  /** Angular OnInit
   */
  ngOnInit() {
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
  }
}
