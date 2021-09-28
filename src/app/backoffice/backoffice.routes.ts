// native modules
import { Routes } from "@angular/router";

// components
import { BackofficeWorkspaceComponent } from "./backoffice-workspace/backoffice-workspace.component";
import { BoLoginComponent } from "./bo-login/bo-login.component";
import { AgendaComponent } from "./desk/agenda/agenda.component";

// routing
import { ACCOUNTING_ROUTES } from "./accounting/accounting.routes";
import { DESK_ROUTES } from "./desk/desk.routes";

// guards

export const BACKOFFICE_ROUTES: Routes = [
  {
    path: "",
    component: BackofficeWorkspaceComponent,
    children: [
      ...ACCOUNTING_ROUTES,
      ...DESK_ROUTES,
      { path: "connexion", component: BoLoginComponent },
      { path: "**", component: AgendaComponent }
    ]
  }
];
