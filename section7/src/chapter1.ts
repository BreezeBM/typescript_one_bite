/**
 * 타입 변수 응용하기
 */

// 첫번째 사례

function swap(a: any, b: any) {
    return [b, a];
}

const [a, b] = swap(1, 2);
console.log(a, b);

function swap2<T>(a: T, b: T) {
    return [b, a];
}
// const [c, d] = swap2("1", 2); 에러가 발생함 "1"이 string이라 이미 string타입으로 할당이 됨

function swap3<T, K>(a: T, b: K) {
    return [b, a];
}
const [c, d] = swap3('1', 2);

/**
 * 두번째 사례
 */

// 에러가 발생함!
// function returnFirstValue<T>(data: T) {
//     return data[0];
// }

function returnFirstValue<T>(data: T[]) {
    return data[0];
}

let num = returnFirstValue([0, 1]); // 0
let str = returnFirstValue(['hello', 'bye']); // "hello"

// * value의 타입이 numer | string으로 추론된다! 왜?  data 변수에 제공되는 타입이 number 그리고 string이기 때문!
let value = returnFirstValue([1, 'hello', 'love']);

// ? 하지만 나는 number로 해주고 싶다면
// 첫번째 이후의 데이터들은 어떤 타입이던 상관이 없기 때문에 rest parameter를 활용하고 unknown으로 지정함
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
    return data[0];
}
let value2 = returnFirstValue2([1, 'hello', 'love']);

/**
 * 세번째 사례
 */

// ? T를 제한하는중, length 프로퍼티가 있는 사람들만! 조건을 걸어서 제한을 둠
function getLength<T extends { length: number }>(data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength('1209837198273');
let var3 = getLength({ length: 10 });
// let var14 = getLength(10);
