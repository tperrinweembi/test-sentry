// native module
import { NgModule } from '@angular/core';

// shared modules
import { BasicModule } from '../modules/basic.module';
import { MaterialModule } from '../modules/material.module';

// feature components
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

//prettier-ignore
/** Array of created components
 *
 */
const COMPONENTS = [
  LoginComponent,
  ProfileComponent
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

/** Module of shared components
 */
@NgModule({
  declarations: COMPONENTS,
  imports: MODULES,
  exports: COMPONENTS
})
export class SharedComponentsModule {}
