/**
 * 인덱스드 엑세스 타입
 * * 인덱스라는 것을 이용해서 다른 타입내에 특정 프로퍼티 타입을 추출하는 방법
 */

// ? interface에 새로운 필드나 값이 추가될 때마다, 계속해서 생성하거나 사용중인 함수에 해당 내용을 추가해 주어야하는 번거로움이 있음
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
        location?: string;
    };
}[];

// function printAuthorInfo(author: { id: number; name: string }) {
//     console.log(`${author.name}-${author.id}`);
// }

// ? post["author"] 여기서 author는 타입이다! const AUTHOR = "author"; Post[AUTHOR] 하면 에러가 발생함
function printAuthorInfo(author: PostList[number]['author']) {
    console.log(`${author.name}-${author.id}`);
}

// 0 도 값이 아니라 타입이다.
function printAuthorInfo2(id: PostList[0]['author']['id']) {
    console.log(`${id}`);
}

const post: PostList[number] = {
    title: 'title',
    content: 'content',
    author: {
        id: 1,
        name: '오써',
        age: 3,
    },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3]
type Tup4 = Tup[number]; // 최적의 유니온 타입으로 반환
