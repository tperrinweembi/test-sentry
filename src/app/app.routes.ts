// native modules
import { Routes } from "@angular/router";

// root components
import { ShopWorkspaceComponent } from "./shop/shop-workspace/shop-workspace.component";

export const APP_ROUTING: Routes = [
  // empty url redirects top the shop
  { path: "", redirectTo: "shop", pathMatch: "full" },

  // shop as lazy loaded module
  {
    path: "shop",
    loadChildren: () => import("./shop/shop.module").then(m => m.ShopModule)
  },

  // backoffice as lazy lloaded module
  {
    path: "admin",
    loadChildren: () =>
      import("./backoffice/backoffice.module").then(m => m.BackofficeModule)
  },

  // Any non existing url redirects to the shop
  { path: "**", redirectTo: "shop" }
];
