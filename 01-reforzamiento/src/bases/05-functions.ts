
function greet(name: string): string {
    return `Hola ${name}`
}

const greet2 = (name:string): string => `Hola ${name}`;

const message = greet('React');
const message2 = greet2('Vue');

console.log({message, message2});

interface User {
    uid: string;
    username: string;
}

function getUser(): User {
    return {
        uid: 'asd',
        username: 'user'
    }
}

const getUser2 = () => ({
    uid: 'asd',
    username: 'user'
});

const user = getUser();
const user2 = getUser2();
console.log({user, user2});

const myNumbers: number[] = [1,2,3,4,5];

//myNumbers.forEach((value) => {console.log(value)});

myNumbers.forEach(console.log);
