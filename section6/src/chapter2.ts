/**
 * 접근 제어자
 * access modifier
 * public private protected
 */

// ? public
// * protected -> 클래스 외부에서 접근이 불가함, 파생 클래스내에서는 접근이 가능
// ! private -> 클래스 외부에서 접근이 불가함, 읽을 수도 없음, 파생된 클래스(자식..)에서도 접근이 불가
class Employee {
    public name: string;
    public age: number;
    public position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() {
        console.log('일하는 중');
    }
}

const employee = new Employee('DJ', 29, 'developer');
employee.name = 'DJ L';
employee.age = 28;
employee.position = 'HR';

class Company {
    // * 생성자에서 접근자를 사용했으면 필드에서는 사용해서는 안됨
    // protected name;
    // public establishedAt;
    // private totalEmployee;

    constructor(protected name: string, public establishedAt: string, private totalEmployee: number) {
        this.name = name;
        this.establishedAt = establishedAt;
        this.totalEmployee = totalEmployee;
    }
}

const company = new Company('미니팜', '2023-04-10', 3);
console.log(company);
// company.name;
// company.totalEmployee;
company.establishedAt = '2023-03-10';
console.log(company);
