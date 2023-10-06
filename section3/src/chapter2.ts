/**
 * Unkwown 타입
 * 전체집합(U)
 */

// 업캐스팅은 모두 허용
function unkwownExam() {
  let a: unknown = 1;
  let b: unknown = "str";
  let c: unknown = [1, 2];
  let d: unknown = true;
  let e: unknown = null;

  // 다운 캐스트는 불가
  let unknownVar: unknown;
  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar
}

/**
 * Never 타입
 * 모든 타입의 서브 타입
 * 모든 집합의 부분집합(공집합; {})
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운캐스팅 불가능
  //   let never1: never = 10
  //   let never2: never = "str"
  //   let never3: never = true
}

/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  // 업캐스팅
  let voidVar: void = undefined;
}

/**
 * Any 타입
 * 치트키 타입... never빼구
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // ? any는 unknown의 서브 타입인데 다운캐스팅이 가능함..
  anyVar = unknownVar;

  // ? undefined는 any의 서브 타입인데.... any가 다운캐스팅이 가능함
  undefinedVar = anyVar;

  // 이것은 불가
  // never는 순수한 공집합이기 때문에 어떠한 타입도 다운캐스팅을 할 수 없다.
  // neverVar = anyVar;
}
