/**
 * 선언 합침
 */

// !  타입은 동일한 이름으로 중복선언 불가
// type Person = {
//     name: string
// }

// type Person = {
//     name: string
// }

// ? 인터페이스는 같은 이름으로 중복선언이 가능하고 합쳐짐
interface Person {
    name: string;
}

interface Person {
    // * name: number; 같은 인터페이스에 같은 프로퍼티지만 다른 타입이나 서브타입으로 선언하면 '충돌'이 발생함, 반드시 동일한 타입으로 지정해야함
    age: number;
}

const person: Person = {
    name: 'KEE',
    age: 5,
};

// 선언 합침의 경우는 TS의 모듈 라이브러리의 타입 정의가 좀 부실한 경우에 우리가 직접 타입을 추가해 주고 정확히 만들어주는 보강때 사용함
/**
 * 모듈 보강
 */

// 기존 모듈에 이렇게 정의되어있는데, 확장할 때
interface Lib {
    a: number;
    b: number;
}

// 사용하는 곳에서 확장
interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: '',
};
