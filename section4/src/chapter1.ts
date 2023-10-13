/**
 * 함수 타입 표현식
 */

type Operation = (a: number, b: number) => number;

// * 기존에는 a, b 에 각각 number를 정의하고 반환을 정의하면 중복되는 코드가 많아지게 됨
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐
 * (콜) 시그니처
 */

// * 하이브리드 타입: 객체로도 쓰이고 함수로도 쓸 수 있음
// 함수도 객체임
// 거의 사용할 일이 없음
type Operation2 = {
    (a: number, b: number): number;
    name: string;
};

function func(a: number): void {}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2(1, 4);
add2.name;
