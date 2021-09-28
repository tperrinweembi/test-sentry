import { Component, OnInit } from '@angular/core';
import { boMenu, BoMenuItem } from '../bo-menu';

/** Component for backoffice sidenav menu
 * @export
 * @class BoSideMenuComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-bo-sidenav',
  templateUrl: './bo-sidenav.component.html',
  styleUrls: ['./bo-sidenav.component.sass']
})
export class BoSidenavComponent implements OnInit {
  /** Gets menu items from menu-items.ts file
   * @type {MenuItem[]}
   */
  public boMenuItems: BoMenuItem[] = boMenu;

  /** Creates an instance of SideMenuComponent.
   */
  constructor() {}

  /** Angular OnInit
   */
  ngOnInit(): void {}
}
