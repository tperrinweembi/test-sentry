// native modules
import { Routes } from '@angular/router';

// components
import { ShopWorkspaceComponent } from './shop-workspace/shop-workspace.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShopLoginComponent } from './shop-login/shop-login.component';
import { ShopRegisterComponent } from './shop-register/shop-register.component';
import { ShopProfileComponent } from './shop-profile/shop-profile.component';

// guards
import { AuthGuard } from '../shared/guards/auth.guard';

export const SHOP_ROUTES: Routes = [
  {
    path: '',
    component: ShopWorkspaceComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'connexion', component: ShopLoginComponent },
      { path: 'inscription', component: ShopRegisterComponent },
      // prettier-ignore
      { path: 'profil', canActivate:[AuthGuard], component: ShopProfileComponent }
    ]
  }
];
