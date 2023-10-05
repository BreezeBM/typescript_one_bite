// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10;
// anyVar = "string";

// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 모든 타입의 변수에 unknown타입의 변수를 넣을 수 없음
// num = unknownVar
// unkwounVar.toUpperCase()도 불가능

// ? 확실하게 타입을 밝혀 주었을 때만 정제해서 사용할 수 있음; 타입 좁히기
if (typeof unknownVar === "number") {
  num = unknownVar;
} else if (typeof unknownVar === "string") {
  unknownVar.toLowerCase();
}
