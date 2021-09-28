import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SCREEN_SIZE, screenSizeMap } from '../types/screen-size.enum';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { filter } from 'rxjs/operators';

/** Service that provides screen size and scroll direction
 * @export
 * @class ScreenService
 */
@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  // prettier-ignore
  /** Emits screen size
   * @type {BehaviorSubject<SCREEN_SIZE>}
   */
  public size$: BehaviorSubject<SCREEN_SIZE> = new BehaviorSubject<SCREEN_SIZE>(SCREEN_SIZE.Unknown);

  // prettier-ignore
  /** Emits scroll direction when it changes
   * @type {(BehaviorSubject<'up' | 'down'>)}
   */
  public scrollDirection$: BehaviorSubject<'up' | 'down'> = new BehaviorSubject<'up' | 'down'>('down');

  /** Variable to store previous vertical scroll position
   * @type {number}
   */
  private previousPosition: number = 0;

  /** Variable to store current vertical scroll position
   * @private
   * @type {number}
   */
  private currentPosition: number = 0;

  /** Creates an instance of ScreenService.
   * @param {BreakpointObserver} breakpointObserver Layout cdk service
   * @param {ScrollDispatcher} scrollDispatcher Scrolling cdk service
   * @param {NgZone} ngZone NgZone
   */
  constructor(
    private breakpointObserver: BreakpointObserver,
    private scrollDispatcher: ScrollDispatcher,
    private ngZone: NgZone
  ) {
    this.subscribeToScreenSize();
    this.subscribeToScrolling();
  }

  /** Subscribes to Layout cdk service
   * @private
   */
  private subscribeToScreenSize() {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ])
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            const size = screenSizeMap.get(query) ?? SCREEN_SIZE.Unknown;
            if (this.size$.value !== size) this.size$.next(size);
          }
        }
      });
  }

  /** Subscribes to Scrolling cdk
   * @private
   */
  private subscribeToScrolling() {
    this.scrollDispatcher
      // limits value emition for performance purpose
      // (default is every 20ms)
      .scrolled(50)
      .pipe(
        // Process scroll only for the main app container
        filter(
          (scrollable: CdkScrollable | void) =>
            scrollable?.getElementRef().nativeElement.id == 'bo-mainspace'
        )
      )
      .subscribe((scrollable: CdkScrollable | void) => {
        if (scrollable) {
          this.currentPosition = scrollable.measureScrollOffset('top');
          this.detectScrollChange(
            this.previousPosition,
            this.currentPosition,
            this.scrollDirection$.value
          );
          this.previousPosition = this.currentPosition;
        }
      });
  }

  /** Compares previous scroll position to current scroll position to detect a vertical scroll direction change
   * @private
   * @param {number} previousPos previous y position in px, stored from previous this.currentPosition
   * @param {number} currentPos current y position in px, given by scrolDispatcher
   * @param {('up' | 'down')} scrollDir current scroll direction, given from previous process
   */
  private detectScrollChange(
    previousPos: number,
    currentPos: number,
    scrollDir: 'up' | 'down'
  ) {
    // Detects the start of a scroll down
    if (scrollDir === 'up' && currentPos < previousPos) {
      this.ngZone.run(() => this.scrollDirection$.next('down'));
    }
    // Detects the start of a scroll up
    else if (scrollDir === 'down' && currentPos > previousPos) {
      this.ngZone.run(() => this.scrollDirection$.next('up'));
    }
  }
}
