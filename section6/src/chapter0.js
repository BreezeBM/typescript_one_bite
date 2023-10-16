/**
 * 클래스
 */

let studentA = {
    name: "JH",
    grade: "SS+",
    age: 29,
    study() {
        console.log("열심히 공부 함")
    },
    introduce() {
        console.log("안녕하세...요")
    }
}

class Student {
    // field 객체가 만들어 낼 프로퍼티
    name;
    grade;
    age;

    // 생성자: 실제로 객체를 만드는 메서드
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("열심히 공부 함")
    };

    introduce() {
        console.log(`안녕! 난 ${this.name}!`)
    };
}

let studentB = new Student("YJ", "AAA-", 29);
console.log(studentB)
studentB.study()
studentB.introduce()

// class StudentDeveloper {
//     name
//     grage
//     age
//     favoriteSkill

//     constructor(name, grade, age, favoriteSkill) {
//         this.name = name
//         this.grage = grade
//         this.age = age
//         this.favoriteSkill = favoriteSkill
//     }

//     study() {
//         console.log("열심히 공부 함")
//     };

//     introduce() {
//         console.log(`안녕! 난 ${this.name}!`)
//     };

//     programming() {
//         console.log(`${this.favoriteSkill}로 프로그래밍함!`)
//     }
// }

class StudentDeveloper extends Student {
    favoriteSkill

    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age)
        this.favoriteSkill = favoriteSkill
    }

    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍함!`)
    }
}

const studentDeveloper = new StudentDeveloper("LEE", "A", "29", "TypeScript")
console.log(studentDeveloper)
studentDeveloper.programming()