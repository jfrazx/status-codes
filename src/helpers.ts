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
export function mergeEnums<
  T extends Record<string, any>,
  R extends Record<string, any>,
>(base: T, derived: R): Omit<T, keyof R> & R {
  return { ...base, ...derived };
}
