export class Cat {
    specie: 'Cat' = 'Cat';

    private _age: number;

    constructor (age: number) {
        this._age = age;
    }

    meow () {
        return 'Meeeeooooow';
    }

    getAge () {
        // https://www.clarin.com/entremujeres/hogar-y-familia/gato-gatos-edad-anos-humanos-equivalencia-conversor-cuenta_0_HkeCSCtDme.html
        return Math.min(this._age, 2) * 10.5 + Math.max(this._age - 2, 0) * 4;
    }
}
