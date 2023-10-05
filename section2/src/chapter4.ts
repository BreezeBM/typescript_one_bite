// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "BEN",
  nickname: "ben",
  birth: "20200202",
  bio: "https://asdxckwkdsodk.ec",
  location: "mars",
};

// 스코프 주의!
// function func() {
//   type User = string;
// }

// 인덱스 시그니처
// type CountryCodes = {
//   Korea: string;
//   UnitedState: string;
// ! ... 100개가 추가된다면..?
//   UnitedKingdom: string;
// };

// let countryCodes: CountryCodes = {
//   Korea: "ko",
//   UnitedState: "us",
// ! 100개를 하나하나 넣어야 함....
//   UnitedKingdom: "uk",
// };
// ? -> 규칙을 확인해야 함.

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
  Japan: "jp",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let CountryNumberCodes: CountryNumberCodes = {};

type CountryNumberCodes2 = {
  [key: string]: number;
  Korea: number;
};

let CountryNumberCodes2: CountryNumberCodes2 = {
  Korea: 1,
};

type CountryNumberCodes3 = {
  [key: string]: number;
  // Korea: string;
  // Korea의 형식의 string 속성을 인덱스 유형의 number와 타입이 맞지 않음...
};
