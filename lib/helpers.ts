/**
 * Merge two enums into one
 * The derived will overwrite duplicate keys from base
 *
 * @export
 * @template T
 * @template R
 * @param {T} base
 * @param {R} derived
 * @returns {(T & R)}
 */
export function mergeEnums<T extends object, R extends object>(
  base: T,
  derived: R,
): T & R {
  // the 'any' type is apparently necessary as TypeScript freaks out with error:
  // Spread types may only be created from object types.
  return { ...(base as any), ...(derived as any) };

  /**
   * Below was considered and rejected because for this use case it should not matter if
   * two text entries point to the same number, even though the number will only point to
   * the derived values
   *
   * Also I currently don't know of a way to type (T ^ R) & R
   * Or would it be T & ^(T | R) & R
   * or....
   */

  // const entries = Object.entries(derived);

  // entries.length /= 2;

  // return entries.reduce((memo, [key, value]) => {
  //   const remove = memo[key];

  //   delete memo[remove];

  //   return {
  //     ...memo,
  //     [key]: value,
  //     [value]: key
  //   }
  // }, Object.assign(base));
}
