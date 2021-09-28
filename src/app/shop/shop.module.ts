// native modules
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

// shared modules
import { BasicModule } from "../shared/modules/basic.module";

// fetaure modules
import { ShopLoginModule } from "./shop-login/shop-login.module";
import { ShopProfileModule } from "./shop-profile/shop-profile.module";

// feature components
import { ShopWorkspaceComponent } from "./shop-workspace/shop-workspace.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ShopMenuComponent } from "./shop-menu/shop-menu.component";
import { ShopRegisterComponent } from "./shop-register/shop-register.component";

// routing
import { SHOP_ROUTES } from "./shop.routes";

//prettier-ignore
/** Array of created components
 *
 */
const COMPONENTS = [
  ShopWorkspaceComponent,
  HomepageComponent,
  ShopMenuComponent,
  ShopRegisterComponent
]

//prettier-ignore
/** Array of imported modules
 *
 */
const MODULES = [
  // native modules
  RouterModule.forChild(SHOP_ROUTES),
  BasicModule,

  // feature modules
  ShopLoginModule,
  ShopProfileModule,

];

/** Shop module
 */
@NgModule({
  declarations: COMPONENTS,
  imports: MODULES
})
export class ShopModule {}
