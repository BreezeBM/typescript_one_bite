/**
 * 제네릭
 * 모든 타입에 두루두루 쓸 수 있는 범용적인 함수
 */

function func(value: string) {
    return value;
}

// * 위의 함수를 범용적으로 만든다면 아래와 같이 된다.
function func1(value: any) {
    return value;
}

let num = func1(10);
num.toUpperCase();

let bool = func1(true);
let str = func1('string');

// * 각각의 변수들이 숫자, 불리언, 스트링으로 추론되면 좋겠지만 any로 추론됨 -> 함수의 반환값 타입은 해당 함수의 리턴 값을 기준으로 추론됨
// 해당 함수는 value를 그대로 반환해서 any타입으로 추론됨

function func2(value: unknown) {
    return value;
}

let num2 = func2(10);
// num2.toUpperCase(); // num2 타입은 unknown입니다!
if (typeof num2 === 'number') {
    num2.toFixed();
}

// ? 꺽쇠 안에 있는 T는 타입을 저장하는 변수; 타입변수라 함
// ? 함수를 호출 할 때 인수의 타입이 어떤 타입이 있느냐에 따라서 이 타입변수에 저장되는 타입이 달라짐
function genericFunc<T>(value: T): T {
    return value;
}

// *  잘추론되는 중
let num3 = genericFunc(10);
let bool3 = genericFunc(true);
let string3 = genericFunc('string');

// num3에서 함수를 호출 했을 때 매개변수로 들어오는 값이 10이 들어오게 되고,
// 이때 함수의 value: T에서 T가 넘버가 되니까 나머지 자리의 T에도 number가 되게된다.

let arr = genericFunc([1, 2, 3]); // 이렇게 하면 number[]로 추론하게 됨
let tuple = genericFunc([1, 2, 3] as [number, number, number]); // 단언을 하면 튜플로

let arr2 = genericFunc<[number, number, number]>([1, 2, 3]); // * 명시적으로 타입을 정의해도 됨
