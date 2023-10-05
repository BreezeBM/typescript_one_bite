// object
// 객체 리터럴 타입
// 객체 구조를 기준으로 타입을 정의함
// * 구조적 타입 시스템이라고 함(Property Based Type System)
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "BEN",
};

user = {
  name: "TEN",
};

// 프로퍼티 값 변경을 막음
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY_API_KEY",
};

// config.apiKey = "hacked" 읽기 전용 속성임으로 할당할 수 없음
