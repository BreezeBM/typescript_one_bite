/**
 * 조건부 타입 기반의 유틸리티 타입
 * Exclude, Extract, ReturnType
 */

/**
 * Exclude<T, U>
 * 제외하다 추방하다
 * T에서 U를 제거함
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>;

/**
 * Extract<T, U>
 * T에서 U를 추출
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

/**
 * Return type
 * 함수의 반환값 타입을 추출하는 타입
 */

function FuncA() {
    return 'hello';
}

function FuncB() {
    return 1;
}

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

type ReturnA = ReturnType<typeof FuncA>;
type ReturnB = ReturnType<typeof FuncB>;
