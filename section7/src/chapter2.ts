/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((el) => el * 2);
// [2, 4, 6]

//                                                 * U는 callback함수의 반환값의 타입
function map<T, U>(arr: T[], callback: (item: T) => U) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

map(arr, (it) => it * 2);
map(['hi', 'hello'], (it) => it.toUpperCase());
// map(['hi', 'hello'], (it) => parseInt(it)); callback 함수의 반환 타입이 number가 되어버림

/**
 * forEach 메서드
 */
const arr2 = [1.34897, 2.1231, 3.0909];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEach(arr2, (it) => {
    console.log(it.toFixed());
});
