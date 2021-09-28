// native modules
import { NgModule } from '@angular/core';

// shared modules
import { BasicModule } from 'src/app/shared/modules/basic.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';

// feature components
import { BoMenuItemComponent } from './bo-menu-item/bo-menu-item.component';
import { BoHeaderComponent } from './bo-header/bo-header.component';
import { BoSidenavComponent } from './bo-sidenav/bo-sidenav.component';

//prettier-ignore
/** Array of imported modules */
const MODULES = [
  // native modules
  BasicModule,
  MaterialModule
];

// prettier-ignore
/** Array of created components */
const COMPONENTS = [
  BoMenuItemComponent,
  BoHeaderComponent,
  BoSidenavComponent
];

/** Module for header menu
 * @export
 * @class HeaderModule
 */
@NgModule({
  declarations: COMPONENTS,
  imports: MODULES,
  exports: COMPONENTS
})
export class BoMenuModule {}
