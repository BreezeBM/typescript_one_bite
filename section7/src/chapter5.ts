/**
 * 프로미스(Promise)
 */

// ? Promise 꺽쇠! -> 비동기 처리의 타입값
const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // resolve(20); // "20"은 에러가 발생함
        reject('실패!');
    }, 3000);
});

// reponse -> unknown
promise
    .then((response) => {
        console.log(response * 10);
    })
    .catch((error) => {
        console.log(error);
    });

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost(): Promise<Post> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: '제목',
                content: '게시물내용',
            });
        }, 3000);

        console.log('로딩중');
    });
}

const postRequest = fetchPost();

postRequest.then((post) => {
    console.log(`게시물 id: ${post.id}`);
});
