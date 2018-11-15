export class Dog {
    specie: 'Dog' = 'Dog';

    private _age: number;

    constructor (age: number) {
        this._age = age;
    }

    bark () {
        return 'Woof!';
    }

    getAge () {
        return this._age * 7;
    }
}
