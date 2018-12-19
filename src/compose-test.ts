import { compose, increment, double, not, isPositive, isEven, identity } from './prelude';

export const incAndDoubles = compose(double, increment);
export const doublesAndInc = compose(increment, double);
export const isNegativeOrZero = compose(not, isPositive);
export const isOdd = compose(not, isEven);
export const alwaysTrue = compose(isEven, double);
export const id = compose(identity, identity);
