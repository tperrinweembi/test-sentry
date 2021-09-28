import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { SCREEN_SIZE } from 'src/app/shared/types/screen-size.enum';
import { boBurgerMenuItem, boMenu, BoMenuItem } from '../bo-menu';

/** Component for the backoffice header menu
 * @export
 * @class BoHeaderComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-bo-header',
  templateUrl: './bo-header.component.html',
  styleUrls: ['./bo-header.component.sass']
})
export class BoHeaderComponent implements OnInit, OnDestroy {
  /** Emits event to app component to open sidenav backoffice menu
   */
  @Output() public openBoSidenav = new EventEmitter();

  /** Variable to store screen size from screen service observable
   * @type {SCREEN_SIZE}
   */
  public screenSize: SCREEN_SIZE = SCREEN_SIZE.Unknown;

  /** Variable to store all subscriptions and unsubscribe from all at once
   * @private
   */
  private subscriptions = new Subscription();

  /** Gets menu items from bo-menu.ts file
   * @type {MenuItem[]}
   */
  public boMenuItems: BoMenuItem[] = boMenu;

  /** Gets burger menu item from bo-menu.ts file
   * @type {MenuItem}
   */
  public boBurgerItem: BoMenuItem = boBurgerMenuItem;

  /** Creates an instance of BoHeaderComponent.
   * @param {ScreenService} screenService
   */
  constructor(private screenService: ScreenService) {}

  /** Angular OnInit
   */
  ngOnInit(): void {
    this.subscribeToScreenSize();
  }

  /** Emits event to app component to open the sidenav menu
   */
  public activateBoSidenav = () => {
    this.openBoSidenav.emit();
  };

  /** Subscribes to size$ from screen service
   * @private
   */
  private subscribeToScreenSize() {
    this.subscriptions.add(
      // Stores emitted size into this.screenSize
      this.screenService.size$.subscribe((size: SCREEN_SIZE) => {
        this.screenSize = size;
      })
    );
  }

  /** Angular OnDestroy
   */
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
