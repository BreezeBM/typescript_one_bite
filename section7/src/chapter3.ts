/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
    key: K;
    value: V;
}

// ? 제네릭 인터페이스는 반드시 꺽쇠를 열고 타입변수에 타입을 직접 지정해야함
// * 타입변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
let keyPair: KeyPair<string, number> = {
    key: '1',
    value: 1,
};

let keyPair2: KeyPair<boolean, number[]> = {
    key: true,
    value: [1, 2, 3],
};

/**
 * 인덱스 시그니처
 */
interface NumberMap {
    [key: string]: number;
}

let numberMap1: NumberMap = {
    key: 123,
    key2: 123,
};

interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: 'value',
};

let booleanMap: Map<boolean> = {
    key: true,
};

/**
 * 제네릭 타입별칭
 */

type Map2<V> = {
    [key: string]: V;
};

let stringMap2: Map2<string> = {
    key: 'vaule',
};

/**
 * 제네릭 인터페이스 활용 예시
 * -> 유저관리 프로그램
 * -> 유저 구분: 학생 유저 / 개발자 유저
 */

interface Student {
    type: 'student';
    school: string;
}

interface Developer {
    type: 'developer';
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    const school = user.profile.school;
    console.log(`${school}로 등교!`);
}

const developerUser: User<Developer> = {
    name: 'GOGI',
    profile: {
        type: 'developer',
        skill: 'Typescript',
    },
};

const studentUser: User<Student> = {
    name: 'Gil-Dong',
    profile: {
        type: 'student',
        school: 'NYU',
    },
};

// goToSchool(developerUser)
goToSchool(studentUser);
