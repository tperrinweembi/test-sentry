import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


//// ⚠️⚠️⚠️⚠️
//// SENTRY TEST ///////
////////////////////////

// ⚠️⚠️ UNCOMMENT NEXT 2 LINES OF IMPORT TO GET THE ERROR ON COMPILATION
// import * as Sentry from "@sentry/angular";
// import { Integrations } from "@sentry/tracing";

// BELOW IS THE SENTRY CONF I GOT FROM MY SENTRY ACCOUNT
// Sentry.init({
//   dsn: "https://126664f8422f4ff9b5a25b433abd49aa@o1013448.ingest.sentry.io/5978793" ,
//   integrations: [
//     // Registers and configures the Tracing integration,
//     // which automatically instruments your application to monitor its
//     // performance, including custom Angular routing instrumentation
//     new Integrations.BrowserTracing({
//       tracingOrigins: ["localhost", "https://yourserver.io/api"],
//       routingInstrumentation: Sentry.routingInstrumentation,
//     }),
//   ],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
