/**
 * 서로소 유니온 타입 - 2번째 예시
 */

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
    state: 'LOADING';
};

type FailedTask = {
    state: 'FAILED';
    error: {
        message: string;
    };
};

type SuccessTask = {
    state: 'SUCCESS';
    response: {
        data: string;
    };
};

// ! 이렇게 만들면 물음표나 Non Null을 써야하니까 원하는 동작이나 안전하지 않음
// type AsyncTask = {
//     state: 'LOADING' | 'FAILED' | 'SUCCESS';
//     error?: {
//         message: string;
//     };
//     response?: {
//         data: string;
//     };
// };

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩중 -> 콘솔에 로딩중
// 실패 - > 실패 : 에러메세지
// 성공 -> 성공: 데이터 출력
function processResult(task: AsyncTask) {
    switch (task.state) {
        case 'LOADING': {
            console.log('로딩중');
            break;
        }
        case 'FAILED': {
            // * error? 에서 물음표를 지우면 에러가 발생하는 이유는 AsyncTask타입에서 애초에 error는 선택적 프로퍼티이기 때문에  task에 error가 있는지 없는지 모름
            // * 좁혀질 타입이 없음
            console.log(`에러 발생 : ${task.error.message}`); // 물음표를 지우면 에러가 발생함..
            break;
        }
        case 'SUCCESS': {
            console.log(`성공 : ${task.response.data}`); // 물음표를 지우면 에러가 발생함
            break;
        }
    }
}

const loading: AsyncTask = {
    state: 'LOADING',
};

const failed: AsyncTask = {
    state: 'FAILED',
    error: {
        message: '오류 발생의 원인은...',
    },
};

const sucess: AsyncTask = {
    state: 'SUCCESS',
    response: {
        data: '데이터...',
    },
};
