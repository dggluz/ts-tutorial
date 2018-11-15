export class Person {
    specie: 'Human' = 'Human';

    private _age: number;

    constructor (age: number) {
        this._age = age;
    }

    talk () {
        return 'Blah blah blah';
    }

    getAge () {
        return this._age;
    }
}
