import { Breakpoints } from '@angular/cdk/layout';

/** Enum that defines all screen sizes the application supports
 */
export enum SCREEN_SIZE {
  Unknown, // 0
  PHONE, // 1
  TABLET, // 2
  LAPTOP, // 3
  DESKTOP // 4
}

/** Map that maps Layout cdk's breakpoints with screen_size
 */
export const screenSizeMap = new Map([
  [Breakpoints.XSmall, SCREEN_SIZE.PHONE],
  [Breakpoints.Small, SCREEN_SIZE.TABLET],
  [Breakpoints.Medium, SCREEN_SIZE.LAPTOP],
  [Breakpoints.Large, SCREEN_SIZE.DESKTOP],
  [Breakpoints.XLarge, SCREEN_SIZE.DESKTOP]
]);
