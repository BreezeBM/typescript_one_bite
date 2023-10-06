/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

// 업캐스팅
num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "노랑",
};

let dog: Dog = {
  name: "돌돌이",
  color: "갈색",
  breed: "진도",
};

animal = dog;

// 에러가 발생
// animal 변수에 breed가 없음
// * animal(슈퍼 타입)         dog(서브 타입)
// * 업캐스팅 가능      <----
// * 다운캐스팅 불가능  --x-->

// dog = animal;

/**
 * dog가 breed라는 animal보다 많은 속성을 가지고 있어서 큰 타입으로 보이지만
 * 타입스크립트는 프로퍼티를 기준으로 타입을 정의하는 구조적 타입 시스템을 따른다.
 *
 * 프로퍼티가 적은, 즉 조건이 적은 타입들이 슈퍼타입이 됨
 *
 */

// 슈퍼타입
type Book = {
  name: string;
  price: number;
};

// 서브타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "코어 자바스크립트",
  price: 10000,
  skill: "JS",
};

book = programmingBook;
// programmingBook = book 오류

/**
 * * 초과 프로퍼티 검사
 * 변수를 초기화 할 때, 초기화 하는 값으로 객체 리터럴을 사용하면 발동하는 검사
 * 실제 타입에 정의해 놓지 않은 프로퍼티가 추가가 되지 않게 막는 검사
 * 객체 타입에 정의된 프로퍼티만 입력해야 함
 */
let book2: Book = {
  name: "코어 자바스크립트",
  price: 10000,
  // skill: "JS",
};

// ? 이경우는 객체 리터럴을 사용하지 않았기 때문에, 허용됨
let book3: Book = programmingBook;

function func(book: Book) {}

func({
  name: "",
  price: 111,
  // skill: "hs"
});

func(programmingBook);
