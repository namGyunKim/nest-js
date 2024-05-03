export function throwIfNull<T>(
  value: T | null | undefined,
  exception: Error,
): T {
  if (value === null || value === undefined) {
    throw exception;
  }
  return value;
}
