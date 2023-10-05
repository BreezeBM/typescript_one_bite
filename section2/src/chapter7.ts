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
