// native modules
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

// shared modules
import { BasicModule } from "../shared/modules/basic.module";

// feature modules
import { BoMenuModule } from "./bo-menu/bo-menu.module";
import { BoLoginModule } from "./bo-login/bo-login.module";
import { AccountingModule } from "./accounting/accounting.module";
import { DeskModule } from "./desk/desk.module";

// feature components
import { BackofficeWorkspaceComponent } from "./backoffice-workspace/backoffice-workspace.component";

// routing
import { BACKOFFICE_ROUTES } from "./backoffice.routes";

//prettier-ignore
/** Array of created components
 *
 */
const COMPONENTS = [
   BackofficeWorkspaceComponent
]

//prettier-ignore
/** Array of imported modules
 *
 */
const MODULES = [
  // native modules
  RouterModule.forChild(BACKOFFICE_ROUTES),
  BasicModule,

  // feature modules
  BoMenuModule,
  BoLoginModule,
  AccountingModule,
  DeskModule
];

@NgModule({
  declarations: COMPONENTS,
  imports: MODULES
})
export class BackofficeModule {}
