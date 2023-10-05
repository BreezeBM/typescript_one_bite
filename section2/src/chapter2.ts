// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["a", "b", "c"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];
// TS는 점진적 타입 시스템을 사용하기 때문에 변수의 타입을 초기화하는 값을 기준으로 자동으로 추론함
// 마우스를 대면 확인이 가능함

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2],
  [3, 4],
];

let doubleArr2: (number | string)[][] = [
  [1, 2],
  ["a", "b"],
  [1, "v"],
];

// 튜플
// 길이와 타입이 고정된 배열
// 결국 배열임, 컴파일된 JS를 확인하면 배열로 값이 들어가 있음, push를 사용하게 되면 어떠한 오류도 없음
let tup1: [number, number] = [1, 2];
let tup2: [number, string] = [3, "b"];
let tup3: [boolean, string, number] = [true, "y", 4];

tup1.push(3);
tup1.push(3);
tup1.push(3);

// ? 튜플을 그럼 왜쓰냐?
// 배열을 사용할 때 인덱스 위치에 따라서 넣어야 되는 값들이 이미 정해져 있고 그 순서를 지키는 것이 중요할 때,
// 튜플 타입을 이용해서 값을 잘못 넣는 것을 방지할 수 있음
const users: [string, number][] = [
  ["BEN", 1],
  ["TEN", 2],
  ["SEN", 3],
  ["YEN", 4],
  // [5, "XEN"], // <- 새로 추가함 에러가 발생함
];
