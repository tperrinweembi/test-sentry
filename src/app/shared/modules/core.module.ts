// native modules
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { environment } from "src/environments/environment";

// ngrx store modules
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { AppRouterStateSerializer } from "../store/router.helper";
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";

// interceptors
import { AuthInterceptor } from "../interceptors/auth.interceptor";

// reducers & effects
import { ROOT_REDUCERS } from "../store/index.reducers";
import { APP_EFFECTS } from "../store/index.effects";

//prettier-ignore
/** Array of imported modules
 *
 */
const MODULES = [
  // native modules
  HttpClientModule,

  // ngrx store modules
  StoreModule.forRoot(ROOT_REDUCERS, {
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
      strictStateSerializability: true,
      strictActionSerializability: true,
      strictActionWithinNgZone: true,
      strictActionTypeUniqueness: true
    }
  }),
  EffectsModule.forRoot(APP_EFFECTS),
  StoreRouterConnectingModule.forRoot({stateKey: "routing"}),
  StoreDevtoolsModule.instrument({
    name: "test-sentry.site",
    logOnly: environment.production
  }),
];

/** All needed modules for the app after the root module app.module
 */
@NgModule({
  imports: MODULES,
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: AppRouterStateSerializer
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
