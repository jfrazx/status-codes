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
}
