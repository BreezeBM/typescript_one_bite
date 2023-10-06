/**
 * 타입 추론
 */

// 타입스크립트가 알아서 초기값을 기준으로 타입을 추론함
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "string",
  type: [true, false],
};

let { id, name, type } = c;

let [one, two, three] = [true, 7, {}];

// 함수는 반환값을 기준으로 타입을 추론
// 기본값고 할당된 값을 기준으로 타입을 추론
function func(message = "message") {
  return "hello";
}

// 선언만 하면 암묵적인 any로 추론됨
let d;
d = 10; // number 타입으로 진화
d.toFixed();

d = "string"; // string 타입으로 진화
d.toUpperCase();

// * let d:any로 선언한 것과는 다르다 왜냐, d는 그냥 26~30까지 any타입으로 선언되 있는 상태로 지낸다. 진화가 없음

// ? const로 선언하게 되면 number literal 타입으로 추론하게 됨
// 상수 이기 때문에 10 이외에는 담을게 없기 때문
const num = 10;
const str = "string";

let arr = [1, "string"];

// 타입을 추론할 때, 상수를 추론하듯이 literal로 추론하는것이 아니라
// 타입스크립트는 범용적으로 개발자들이 해당 변수들을 사용할 수 있도록 넓은 타입으로 추론해주는 과정을
// * 타입 넓히기라고 함
