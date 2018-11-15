export const str = (x: string) => {
    if (typeof x !== 'string') {
        throw new TypeError(`String expected but ${typeof x} was found, with value ${x}`);
    }
    return x;
};
