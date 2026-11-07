interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'abc',
        city: 'MX'
    }
}

console.log(ironman);

/*
const spiderman = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;

console.log(ironman, spiderman);
*/
