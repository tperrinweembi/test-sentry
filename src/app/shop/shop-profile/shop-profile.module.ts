// native modules
import { NgModule } from '@angular/core';

// shared modules
import { BasicModule } from 'src/app/shared/modules/basic.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

// feature components
import { ShopProfileComponent } from './shop-profile.component';

//prettier-ignore
/** Array of created components
 *
 */
const COMPONENTS = [
  ShopProfileComponent
 ]

//prettier-ignore
/** Array of imported modules
 *
 */
const MODULES = [
  // native modules
  BasicModule,
  MaterialModule,

  // feature modules
  SharedComponentsModule
];

/** Shop profile module
 */
@NgModule({
  declarations: COMPONENTS,
  imports: MODULES
})
export class ShopProfileModule {}
