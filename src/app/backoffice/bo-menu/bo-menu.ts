/** Interface describing for one backoffice menu item
 */
export interface BoMenuItem {
  name: string; // name used in code
  label: string | null; // label used for display
  icon_type: 'mat-icon' | 'img'; // tells if icon is a material icon or an image
  icon: string; // material icon name or image file name regarding icon_type property
}

/** Array of all items describing the whole backoffice menu
 */
export const boMenu: BoMenuItem[] = [
  {
    name: 'receipe',
    label: 'Recettes',
    icon_type: 'mat-icon',
    icon: 'assignment'
  },
  {
    name: 'ingredients',
    label: 'Ingredients',
    icon_type: 'mat-icon',
    icon: 'fact_check'
  }
];

/** Unique json object for the backoffice burger menu
 */
export const boBurgerMenuItem: BoMenuItem = {
  name: 'burger_menu',
  label: null, // no text, always icon only
  icon_type: 'mat-icon',
  icon: 'reorder'
};
