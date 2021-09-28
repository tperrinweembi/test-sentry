// native modules
import { Routes } from '@angular/router';

// components
import { InvoicesComponent } from './invoices/invoices.component';
import { AccountingExportsComponent } from './accounting-exports/accounting-exports.component';

// guards

export const ACCOUNTING_ROUTES: Routes = [
  { path: 'compta', component: InvoicesComponent },
  { path: 'compta/factures', component: InvoicesComponent },
  { path: 'compta/exports', component: AccountingExportsComponent }
];
