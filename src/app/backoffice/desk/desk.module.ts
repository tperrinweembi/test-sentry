// native modules
import { NgModule } from '@angular/core';

// shared modules
import { BasicModule } from 'src/app/shared/modules/basic.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';

// feature components
import { AgendaComponent } from './agenda/agenda.component';
import { CheckinComponent } from './checkin/checkin.component';

//prettier-ignore
/** Array of created components
 *
 */
const COMPONENTS = [
  AgendaComponent,
  CheckinComponent
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

/** Desk module
 */
@NgModule({
  declarations: COMPONENTS,
  imports: MODULES
})
export class DeskModule {}
