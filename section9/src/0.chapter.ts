/**
 * 조건부 타입
 */

// * 넘버 타입이 string 타입을 확장하는가? 참이면 string, 거짓이면 number
// 결론 A는 number
type A = number extends string ? string : number;

type ObjA = {
    a: number;
};

type ObjB = {
    a: number;
    b: number;
};

// * B는 number Type
type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number> = '1';
let varB: StringNumberSwitch<string> = 1;

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
    if (typeof text === 'string') {
        return text.replace(' ', '');
    } else {
        return undefined;
    }
}

let result = removeSpaces('hi im a Ben');
result.toUpperCase();

let result2 = removeSpaces(undefined);

// ? 함수 내부에서는 조건부 타입의 결과를 알 수 없어서 "string"형식은 T extends string? string : undefined 형식에 할당할 수 없습니다. 라는 에러가 발생
// function removeSpaces<T>(text: T): T extends string ? string : undefined {
//     if (typeof text === 'string') {
//         return text.replace(' ', '');
//     } else {
//         return undefined;
//     }
// }
// * 위의 함수처럼 함수 오버로딩으로 문제를 해곃함
