// native modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutModule } from "@angular/cdk/layout";
import { MaterialModule } from "./material.module";

// third parties modules
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveComponentModule } from "@ngrx/component";

// prettier-ignore
/** Array of processed modules
 */
const MODULES = [
  // native modules
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  LayoutModule,
  MaterialModule,
  // third parties modules
  NgxSpinnerModule,
  ReactiveComponentModule,
];

/** Modules gathering basic modules that are almost always needed in all modules
 */
@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class BasicModule {}
