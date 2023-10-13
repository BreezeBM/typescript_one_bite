/**
 * 함수 오버로딩
 * 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
 * JS는 지원 X, TS에서만 지원 O
 */

// *  함수의 버전들 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// * 실제 구현부 -> 구현 시그니쳐
//function func(a: number, b: number, c: number) {} // ! 이렇게 하면
// function func(a: number): void; 이 시그니처에서 해당 구현 시그니처와 호환이 되지 않는다는 에러가 발생함
// 해당 시그니처의 의미가 사라짐

// ? 모든 시그니처의 의미가 있도록 방어적으로 작성해야함
function func(a: number, b?: number, c?: number) {
    if (typeof b === 'number' && typeof c === 'number') {
        console.log(a + b + c);
    } else {
        console.log(a + 20);
    }
}

//? 어떤 함수가 오버로드 시그니처를 가지고 있으면 이제부터는 이 함수를 호출할 때는, 오버로드 시그니처 중 하나의 버전을 따라갑니다.
// func();
func(1);
// func(1, 2);
func(1, 2, 3);
