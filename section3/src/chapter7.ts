/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

// value => number : toFixed()
// value => string : toUppercase()
// value => Date : getTime()
// value => Person : name은 age살 입니다.
type Person = {
    name: string;
    age: number;
};

function func(value: number | string | Date | null | Person) {
    // ? 조건문과 같이 타입을  좁힐 수 있는 표현들을 TS에서 "타입 가드"라고 불림
    if (typeof value === 'number') {
        // value를 number로 추론
        console.log(value.toFixed());
    }

    // value를 string으로 추론
    else if (typeof value === 'string') {
        console.log(value.toLocaleUpperCase());
    }

    // null도 object임
    // if (typeof value === 'object') {
    //     return value.getTime();
    // }
    else if (value instanceof Date) {
        // Date 자바스크립트의 내장 객체
        console.log(value.getTime);
    }

    // ! Person은 형식만 참조합니다. 타입만 참조한다는 뜻
    // * instanceof는 타입이 들어오면 안됨. 왼쪽(value)에 들어오는 값이 오른쪽(Person)에 들어오는 값의 인스턴스인지 확인하는 것
    // if (value instanceof Person) {
    // }

    // in 뒤에는 null undefined는 안됨
    else if (value && 'age' in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}
