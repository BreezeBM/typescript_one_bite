/**
 * 인터페이스 확장
 */

// 중복되는 속성들이 많음
interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    // name: 'BBOBBI'; // ? 다시 프로퍼티에 대한 정의가 가능해짐, 다만 원본타입의 서브타입이어야함! number를 넣으면 에러 왜? animal에서 string으로 지정했기 때문
    isBark: boolean;
}

const dog: Dog = {
    name: 'DOGI',
    age: 3,
    isBark: true,
};

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
    name: 'GGOGI',
    age: 4,
    isBark: false,
    isScratch: true,
};
