/**
 * inter(추론)
 * 조건부 타입 내에서 특정 타입만 추론해 올 수 있는 기능
 */

// 반환 타입인 string만 가져오고 싶은 경우는 어떻게 해야 할까?
type FuncA = () => string;

type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;

// type A = ReturnType<FuncA>; // string

// type B = ReturnType<FuncB>; // never

// ? infer R은 R이라고만 보면 됨
type ReturnType<T> = T extends () => infer R ? R : never;

// * 각각의 함수 funcA와 funcB의 반환값을 추론함
// ? FuncA가 들어감. 그래서 T extends에서 T는 () => string이 됨
// ? 그리고 비교하는 타입은 () => R (infer R)임
// ? 즉 () => string 이 () => R의 서브타입인가?
// ! 이 때, infer와 함께 쓴 R 타입은 어떤 식으로 동작하는가? () => string 이 조건식을 참으로 만드는 타입을 추론하도록 동작함
// 여기서는 () => string이 참이 될려면 string타입으로 추론되면 됨,
// * 이때 R은 string으로 추론됨
type A = ReturnType<FuncA>;
``;
type B = ReturnType<FuncB>;

// number타입을 넣게 되면 어떻게든 참이되도록 하는 슈퍼타입이 없음 -> R을 추론할 수 없게됨
// never 반환
type C = ReturnType<number>;

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 Promise 타입이어야 함
// 2. 프로미스 타입의 결과값 타입을 반환해야 함

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string

// * 동작 설명
// Promise Number 라는 타입이 Promise<infer R>의 서브타입이 되는 R타입을 추론해라! R은 넘버가 됨
// Promise String 라는 타입이 Promise<infer R>의 서브타입이 되는 R타입을 추론해라! R은 스트링이 됨
