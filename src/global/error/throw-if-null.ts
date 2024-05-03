export function throwIfNull<T>(
  value: T | null | undefined,
  exception: Error,
): T {
  if (value === null || value === undefined) {
    console.log(value);
    throw exception;
  }
  return value;
}
