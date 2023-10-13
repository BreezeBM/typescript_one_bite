/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// * 기준1 반환값이 호환되는가?
type A = () => number;
type B = () => 10; // * number literal

let a: A = () => 10;
let b: B = () => 10; // 20을 반환하면 에러

a = b; // 업캐스팅
// ! b = a 에러 발생 -> 다운캐스팅이기 때문에 안됨

// * 기준2 매개변수가 호환되는가?
// * 2-1 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// ! c = d; 업캐스팅이 호환이 안됨...
d = c; // ? 다운캐스팅이 호환이 됨..... 왜?

// * 이걸 이해하기 위해서는 매개변수가 객체타입을 사용하는 예시를 보면 좋다.

type Animal = {
    name: string;
};

type Dog = {
    name: string;
    color: string;
};

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// ! animalFunc = dogFunc; 업캐스팅인대 안됨... animal 타입에는 color가 없어서
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
    console.log(animal.name);
    // console.log(animal.color)
};

let testFunc2 = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// ? 매개변수를 기준으로는 업캐스팅이 안됨, 다운캐스팅은 가능함

// * 2-2 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

// * 할당하려는 함수 타입의 매개변수 갯수가 적을 때 가능함 (타입은 물론 같아야함)
func1 = func2;
// ! func2 = func1; func1은 매개변수가 2개인데 func2은 1개여서 안됨
