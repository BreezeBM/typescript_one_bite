// void
// void -> 공허 -> 아무것도 없다.
// 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("world");
}

// 오직 undefined만 담을 수 있음
// strictNullCheck: false로 하면 a = null 가능
let a: void;
// a = 1
// a = ""
// a = {}
a = undefined;

// function func3(): undefined {
//   return; // return undefined
// }

// function func4(): null {
//   return null // return undefined
// }

// never
// 존재하지 않는 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

// strictNullChecks를 해제해도 null을 담을 수 없고, any도 저장할 수 없음
