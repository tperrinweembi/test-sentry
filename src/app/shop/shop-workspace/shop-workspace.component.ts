import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { User } from "src/app/shared/models/user.model";
import * as authActions from "src/app/shared/store/actions/auth.actions";
import { AppState } from "src/app/shared/store/index.reducers";

/** Shop workspace component
 */
@Component({
  selector: "app-shop-workspace",
  templateUrl: "./shop-workspace.component.html",
  styleUrls: ["./shop-workspace.component.sass"]
})
export class ShopWorkspaceComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }
}
