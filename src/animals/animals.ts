import { Cat } from './cat';
import { Dog } from './dog';
import { Person } from './person';

type Animal = Cat | Dog | Person;

export const getAge = (animal: Animal) =>
    animal;
;

export const talk = (animal: Animal) => {
    switch (animal.specie) {
        case 'Cat':
            return animal;
        case 'Dog':
            return animal;
        case 'Human':
            return animal;
    }
};
