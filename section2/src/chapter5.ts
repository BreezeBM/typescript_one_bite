// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 숫자나 문자를 지정할 수 있고, 자동으로 할당도 됨
enum Role {
  ADMIN,
  USER = 10,
  GUEST,
}

type User = {
  id: number;
  role: Role;
};

let user1: User = {
  id: 1,
  role: Role.ADMIN,
};

let user2: User = {
  id: 2,
  role: Role.USER,
};

let user3: User = {
  id: 3,
  role: Role.GUEST,
};

console.log(user1, user2, user3);
