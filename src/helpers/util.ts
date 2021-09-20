import { clone } from 'lodash';

// Make range
export const makeArray = (length: number, value: any) => {
  const arr = new Array(length);
  const rv = arr.fill(value);
  return rv;
}
