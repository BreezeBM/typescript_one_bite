/**
 * 타입스크립트의 클래스
 */

const employee = {
    name: 'LEE',
    age: 29,
    position: 'developer',
    work() {
        console.log('일하는 중~');
    },
};

class Employee {
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work(): void {
        console.log('일하는 중~');
    }
}

class ExecutiveOfficer extends Employee {
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}

const employeeB = new Employee('BEAN', 29, 'developer');
console.log(employeeB);

// 타입스크립트의 클래스는 타입처럼 사용도 가능하다
const employeeC: Employee = {
    name: 'Hyun-Ah',
    age: 29,
    position: 'developer',
    work() {
        console.log('HAY~!');
    },
};
