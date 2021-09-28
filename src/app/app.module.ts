// native modules
import { APP_INITIALIZER, ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// routing
import { Router, RouterModule } from "@angular/router";
import { APP_ROUTING } from "./app.routes";

// created modules
import { CoreModule } from "./shared/modules/core.module";

// components
import { AppComponent } from "./app.component";

// third parties modules
import { AlertModule } from "@full-fledged/alerts";


// sentry
// import * as Sentry from "@sentry/angular";


/** Root module
 * @class AppModule
 */
@NgModule({
  declarations: [AppComponent],
  imports: [
    // native modules
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(APP_ROUTING),
    // third parties module
    AlertModule.forRoot({
      maxMessages: 5,
      timeout: 5000,
      positionX: "right",
      positionY: "top"
    })
  ],
  // providers: [
  //   {
  //     provide: ErrorHandler,
  //     useValue: Sentry.createErrorHandler({
  //       showDialog: true,
  //     }),
  //   },{
  //     provide: Sentry.TraceService,
  //     deps: [Router],
  //   }, {
  //     provide: APP_INITIALIZER,
  //     useFactory: () => () => {},
  //     deps: [Sentry.TraceService],
  //     multi: true,
  //   },
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {}
