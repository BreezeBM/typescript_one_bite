/**
 *  인터페이스와 클래스
 */

// * 인터페이스는 퍼블릭이다!
interface Character {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Character implements Character {
    // name: string;
    // moveSpeed: number;

    constructor(public name: string, public moveSpeed: number, private extra: string) {
        // this.name = name;
        // this.moveSpeed = moveSpeed;
    }

    move(): void {
        console.log('푸슝~');
    }
}
