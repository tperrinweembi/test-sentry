// native modules
import { NgModule } from '@angular/core';

// shared modules
import { BasicModule } from 'src/app/shared/modules/basic.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';

// feature components
import { InvoicesComponent } from './invoices/invoices.component';
import { AccountingExportsComponent } from './accounting-exports/accounting-exports.component';

//prettier-ignore
/** Array of created components
 *
 */
const COMPONENTS = [
  InvoicesComponent,
  AccountingExportsComponent
]

//prettier-ignore
/** Array of imported modules
 *
 */
const MODULES = [
  // native modules
  BasicModule,
  MaterialModule
];

/** Accounting module
 */
@NgModule({
  declarations: COMPONENTS,
  imports: MODULES
})
export class AccountingModule {}
