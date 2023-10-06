/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재함
 */

/**
 * * 합집합 타입(Union Type)
 */
let a: number | string | boolean; // | undefined | null ...

a = 1;
a = "one";
a = false;

let arr: (number | string | boolean)[];

arr = [1, "star", true];

// * 두개의 타입은 누구도 서로의 슈퍼나 서브타입이 아니다. (서로에게 없는 프로퍼티가 존재)
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  language: "",
  color: "",
};

// 오류, Dog, Person 어디에도 포함되어 있지 않음
// let union4: Union1 = {
//   name: "",
// };

/**
 * 교집합 타입(Intersection Type)
 */
let variable: number & string; // -> never 교집합이 없음

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
