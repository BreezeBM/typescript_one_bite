/**
 * keyof 연산자
 */

// interface Person {
//     name: string;
//     age: number;
//     location?: string;
// }

type Person = typeof person;

// keyof Person => "name" | "age"
// function getPropertyKey(person: Person, key: keyof Person) {
//     return person[key];
// }

function getPropertyKey(person: Person, key: keyof typeof person) {
    return person[key];
}

const person = {
    name: 'John',
    age: 22,
};

getPropertyKey(person, 'name');
