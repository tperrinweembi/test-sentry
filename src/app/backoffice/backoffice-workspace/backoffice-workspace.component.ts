import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScreenService } from 'src/app/shared/services/screen.service';

/** Bcakoffice workspace component
 * @export
 * @class BackofficeWorkspaceComponent
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-backoffice-workspace',
  templateUrl: './backoffice-workspace.component.html',
  styleUrls: ['./backoffice-workspace.component.sass']
})
export class BackofficeWorkspaceComponent implements OnDestroy {
  /** Variable to store all subscriptions and unsubscribe from all at once
   * @private
   */
  private subscriptions = new Subscription();

  /** Variable to add and remove 'hide' class in header
   * @type {boolean}
   */
  public scrollingUp: boolean = false;

  /** Creates an instance of AppComponent.
   * @param {ScreenService} screenService
   */
  constructor(private screenService: ScreenService) {}

  /** Angular OnInit
   */
  ngOnInit() {
    this.subscribesToScrollDirection();
  }

  /** Angular OnDestroy
   */
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /** Subscribes to scroll direction from screen service
   * @private
   */
  private subscribesToScrollDirection() {
    this.subscriptions.add(
      this.screenService.scrollDirection$.subscribe(
        (scrollDirection: 'up' | 'down') => {
          this.scrollingUp = scrollDirection === 'up' ? true : false;
        }
      )
    );
  }
}
