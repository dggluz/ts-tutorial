import { arrOf, strictObjOf, num, str } from 'parmenides';

const addressContract = strictObjOf({
    street: str,
    suite: str,
    city: str,
    zipcode: str,
    geo: strictObjOf({
        lat: str,
        lng: str
    })
});

const companyContract = strictObjOf({
    name: str,
    catchPhrase: str,
    bs: str
});

const userContract = strictObjOf({
    id: num,
    name: str,
    username: str,
    email: str,
    address: addressContract,
    phone: str,
    website: str,
    company: companyContract
});

export const usersContract = arrOf(userContract);
