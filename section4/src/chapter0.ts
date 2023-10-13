/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명
// ? TS 버전 : 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 * 필수 매개변수가 선택적(?) 매개변수보다 항상 앞에 선언되어야 함
 */
//  * 기본값을 기준으로 타입을 추론함
// * name: number = 'LEE"  기본 값과 다른 타입을 지정하면 에러 발생
function introduce(name = 'LEE', tall: number, age?: number) {
    console.log(`name: ${name}`);
    if (typeof age === 'number') {
        console.log(`age: ${age + 10}`); // 숫자를 더하면 age가  undefined일 수 있어서 에러발생, 타입가드 필요
    }
}

introduce('LEE', 180, 20);
introduce('LEE', 30);

function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

getSum(1, 2, 3); // 6
