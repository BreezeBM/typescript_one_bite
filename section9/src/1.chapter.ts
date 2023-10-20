/**
 * 분산적인 조건분 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

// ? 분산을 방지하는 방법
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// * 뭔가 number | string 유니언 타입이어서 T extends number에서 거짓으로 되서 number일것 같지만
// * 이 경우는 분산적인 조건부 타입으로 업그레이드 됨, 동작이 바뀜
// ? 유니온 타입을 타입변수에 전달하면 한번은 number가 넘어가고, 한번은 string타입이 들어가서 묶이게 됨
// ? a, b가 묶인것 처럼 된다.
let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> -> 결과는 string
// StringNumberSwitch<string> -> 결과는 number
// * 결과가 묶이면서 string | number 유니온 타입이 됨

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// boolean을 넣으면 거짓이라 number
// string
// number

// 결과
// string | number 유니온 타입

/**
 * 실용적인 예제
 */

// ? 타입 변수 T가 타입 변수 U의 서브 타입이라면 never
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 2단계
// number
// never
// boolean

// 결과
// number | boolean (| never)
// 하지만 네버(never)는 유니언 타입에서는 사라진다.

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
