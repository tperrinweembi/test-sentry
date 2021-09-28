/** User interface
 */
export interface User {
  firstName: string;
  lastName: string;
  credentials: Credentials;
}

/** User Credentials
 */
export interface Credentials {
  email: string;
  password?: string;
}
