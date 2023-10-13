/**
 * 사용자 정의 타입가드
 */

type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal = Dog | Cat;

// 좋지 않은 방법! -> 타입이 제대로 안 좁혀지는 현상 발생
function warning(animal: Animal) {
    if ('isBark' in animal) {
        // 강아지
        // * animal; -> (parameter) animal & Record<"isBark", unknown>으로 추론함; 이상한 추론
    } else if ('isScratch' in animal) {
        // 고양이
    }
}

function isDog(animal: Animal) {
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal) {
    return (animal as Cat).isScratch !== undefined;
}

function warning2(animal: Animal) {
    if (isDog(animal)) {
        // 강아지
        animal; // * Dog 타입이 보장이 안되고 있음, TS가 못알아 먹는중  -> 반환값을 가지고는 타입을 좁혀주지 않음
    } else if (isCat(animal)) {
        // 고양이
    }
}

// ? 상당히 독특한 문법입니다.
function isDog2(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}

function isCat2(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function warning3(animal: Animal) {
    if (isDog2(animal)) {
        animal;
    } else if (isCat2(animal)) {
        animal;
    }
}
