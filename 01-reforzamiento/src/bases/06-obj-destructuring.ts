
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
}

const { name, age, key } = person;

console.log({name, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const userContext = ({key, name, age, rank}: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age
        },
        rank: rank
    };
};

const {rank, keyName, user} = userContext(person);
const {name : name2} = user;

console.log({rank, keyName, name2});
