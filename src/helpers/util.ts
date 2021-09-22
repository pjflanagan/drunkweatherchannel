
// Make range
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const makeArray = (length: number, value: any): any[] => {
  const arr = new Array(length);
  const rv = arr.fill(value);
  return rv;
}
