/** JWT token class
 */
export interface JwtToken {
  isAnonymous: boolean | null;
  token: string | null;
}
