/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

type Admin = {
    tag: 'ADMIN';
    name: string;
    kickCount: number;
};

type Member = {
    tag: 'MEMBER';
    name: string;
    point: number;
};

type Guest = {
    tag: 'GUEST';
    name: string;
    visitCount: number;
};

// tag가 없을 때는 name이라는 교집합이 있었다.
// ? tag라는 프로퍼티가 추가되어서 서로 교집합의 영역이 전혀 없다.
type User = Admin | Member | Guest;

//  * 각각의 조건문이 어떤 user의 타입인지 정확히 알아보기가 힘들다
// * 각각의 타입을 다시 보고 확인해야함.. 직관적이지 않음 이때 서로소 유니온을 사용하면 좋다.
// function login(user: User) {
//     if ('kickCount' in user) {
//         console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
//     } else if ('point' in user) {
//         console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
//     } else if ('visitCount' in user) {
//         console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다..`);
//     }
// }

// function login(user: User) {
//     if (user.tag === 'ADMIN') {
//         console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
//     } else if (user.tag === 'MEMBER') {
//         console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
//     } else if (user.tag === 'GUEST') {
//         console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다..`);
//     }
// }

function login(user: User) {
    switch (user.tag) {
        case 'ADMIN':
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;

        case 'MEMBER':
            console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
            break;

        case 'GUEST':
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다..`);
            break;
    }
}
