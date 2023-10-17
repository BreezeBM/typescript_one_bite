/**
 * 맵드 타입
 */

interface User {
    id: number;
    name: string;
    age: number;
}

// User랑 거의 중복...
// interface PartialUser {
//     id?: number;
//     name?: string;
//     age?: number;
// }

type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key];
};

type PartialUser2 = {
    [key in keyof User]?: User[key];
};

type BooleanUser = {
    [key in keyof User]: boolean;
};

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fecthUser(): ReadonlyUser {
    return {
        id: 1,
        name: 'LEE',
        age: 22,
    };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
    // 수정하는 기능
}

// * age만 변경되는데 id랑 name을 다 보내야하나?
// * 변경되는것만 못보내나?
updateUser({
    // id: 1,
    // name: 'LEE',
    age: 26,
});
