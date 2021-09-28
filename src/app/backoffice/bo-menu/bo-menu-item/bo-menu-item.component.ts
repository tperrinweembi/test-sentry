import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { SCREEN_SIZE } from 'src/app/shared/types/screen-size.enum';

/** Component of one menu item
 * @export
 * @class BoMenuItemComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-bo-menu-item',
  templateUrl: './bo-menu-item.component.html',
  styleUrls: ['./bo-menu-item.component.sass']
})
export class BoMenuItemComponent implements OnInit {
  /** Json input with all needed item properties
   */
  @Input('boMenuItem') item: any;

  /** String input indicating if item is called in the header or side menu
   * @type {string}
   */
  @Input('mode') mode: string = 'header'; // "side-menu" | "header"

  /** Variable to store all subscriptions and unsubscribe from all at once
   * @private
   */
  private subscriptions = new Subscription();

  /** Variable to store screen size from screen service observable
   * @type {SCREEN_SIZE}
   */
  public screenSize: SCREEN_SIZE = SCREEN_SIZE.Unknown;

  /** Creates an instance of MenuItemComponent.
   * @param {ScreenService} screenService
   */
  constructor(private screenService: ScreenService) {}

  /** Angular OnInit
   */
  ngOnInit(): void {
    this.subscribeToScreenSize();
  }

  /** Subscribes to size$ from service
   */
  private subscribeToScreenSize() {
    this.subscriptions.add(
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
