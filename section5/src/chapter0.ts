/**
 * 인터페이스
 * 타입에 이름을 지어주는 또 다른 문법
 * 상호간에 약속된 규칙
 * 객체 구조를 정의하는데 특화된 문법
 * 상속, 합침 등의 특수한 기능을 제공함
 */

interface Person {
    readonly name: string;
    age?: number;
    sayHi: () => void; // 함수타입 표현식

    // * 메서드의 오버로딩을 구현하고 싶을때는 아래와 같이 호출시그니쳐 사용
    greeting(): void; // 호출 시그니쳐
    greeting(a: number, b: number): void;
}

const person: Person = {
    name: 'LEE',
    age: 30,
    sayHi: function () {},
    greeting() {},
};

// 유니온이나 인터섹션은 안된다.
// interface Animal {
//     name: string
// } & Person
