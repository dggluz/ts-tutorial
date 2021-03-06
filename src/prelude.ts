export const double = (x) =>
    x * 2
;

export const increment = (x) =>
    x + 1
;

export const isPositive = (x) =>
    x > 0
;

export const isEven = (x) =>
    (x % 2) === 0
;

export const not = (x) =>
    !x
;

export const showResult = (x) =>
    `The result is: ${x}`
;

export const identity = (x) =>
    x
;

export const compose = (f, g) =>
    (x) =>
        f(g(x))
;
