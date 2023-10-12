/**
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
};

// let person: Person = {} 이렇게 하면 에러가 발생함

// let person = {};
// * person.name = "Lee"; -> person 변수의 타입이 초기화 값인 이 빈 객체를 기준값으로 추론되어 버림
// person.age = 20;

// ? 이렇게 원하는 기능을 만들이 어려울 때, 초기화 값을 타입을 단언해줌
let person = {} as Person; // ? 빈 객체를 TS Complier에게 Person 타입으로 간주하라고 알려줌
person.name = 'LEE';
person.age = 20;

type Dog = {
    name: string;
    color: string;
};

// 초과 프로퍼티 검사발동! -> 변수를 초기화 할 때, 초기화 하는 값으로 객체 리터럴을 사용하면 발생함!
// let dog: Dog = {
//     name: 'dong-gu',
//     color: 'brown',
//     breed: 'cogi',
// };

//* 어쩔 수 없이 사용해야되는 경우라면 단언을 사용한다.
let dog = {
    name: 'dong-gu',
    color: 'brown',
    breed: 'cogi',
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
// * 10은 숫자타입이다, string과 집합관계로 겹치는 부분이 전혀없다.
// let num3 = 10 as string;

// ! 아주 BAD
let num3 = 10 as unknown as string; // 다중 단언...?

/**
 * const 단언
 */

// * 넘버 리터럴 10으로 추론됨 -> const와 동일하게 선언한것 처럼 동작함
let num4 = 10 as const;

// 읽기전용으로 추론됨
// 프로퍼티의 값을 수정할 수 없음
// * readonly를 프로퍼티 각각에 붙일 필요 x
let cat = {
    name: '야옹이',
    color: 'yellow',
} as const;

/**
 * Non null 단언
 */
type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: '게시글',
    author: 'LEE',
};

const len: number | undefined = post.author?.length;
// * 느낌표가 Non null 연산자, author가 있어!
const len2: number = post.author!.length;
