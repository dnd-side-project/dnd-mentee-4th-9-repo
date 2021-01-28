# 🌱 9조 See-At 코딩 컨벤션
> 아래는 [TOAST UI 코딩 컨벤션](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)에서 기본적인 부분을 요약한 내용입니다. 따라서 개발 도중 모호하거나 아래에 없는 부분이 생길 시 원문 내용을 따릅니다.

## 1. 문장의 종료
* 한 줄에 하나의 문장만 허용
* 문장 종료 시 `;` 사용

## 2. 명명 규칙
기본적으로 **카멜 케이스** 사용
* 상수 : 영문 대문자 스네이크 표기법 사용 ex) `SYMBOLIC_CONSTANTS`
* 생성자 : 대문자 카멜 케이스 사용 ex) `class ConstructorName`
* 변수, 함수 : 카멜 케이스 사용
```javascript
let variableName;

// 배열 - 복수형 이름
const dogs = [];

// 정규 표현식 - 'r'로 시작
const rDesc = /.*/;

function getPropertyName () {
    ...
}

// 이벤트 핸들러 - 'on'으로 시작
const onClick = () => {};

// 불린 반환 함수 - 'is'로 시작
let isAbailable = false;
```
* 범용적인 대문자 약어 : URL, HTML 등은 대문자 그대로 사용 ex) `parseHTML`

## 3. 선언과 할당
### 3.1 변수
1. 변수 선언 방식
   * `var`는 **사용하지 않도록** 함
   * `const` : 값이 변하지 않는 변수
   * `let` : 값이 변하는 변수
2. 변수 선언 시점
   * `const`를 `let`보다 위에 선언
   * `const`와 `let`은 사용 시점에 선언 및 할당
### 3.2 모듈
* 외부 모듈과 내부 모듈을 **공백**을 두어 구분해서 사용 -> 가독성 향상
```javascript
// 외부 모듈
const lodash = require('lodash');
const $ = require(jquery);
const handlebars = require('handlebars');
const d3 = require('d3');

// 내부 모듈
const pluginFactory from '../../factories/pluginFactory';
const predicate from '../../helpers/predicate';
const raphaelRenderUtil from '../../plugins/raphaelRenderUtil';
```

## 4. 배열과 객체
배열과 객체는 **리터럴**로 선언
``` javascript
// Bad
const emptyArr = new Array();
const arr = new Array(1, 2, 3, 4, 5);
// Good
const emptyArr = [];
const arr = [1, 2, 3, 4, 5];

// Bad
const emptyObj = new Object();
const obj = new Object();
// Good
const emptyObj = {};
const obj = {
  pro1: 'val1', 
  pro2: 'val2'
};
```
### 4.1 배열
* 배열 복사 시 순환문이 아닌 **전개 연산자** 사용
```javascript
// 배열 itemsCopy에 items를 복사할 경우

// Bad
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}
// Good
const itemsCopy = [...items];
```
* 배열의 괄호, 요소 중 하나라도 줄 바꿈이 있다면 동일하게 모두 줄바꿈 적용
### 4.2 객체
* 객체 프로퍼티가 1개일 경우 한 줄 정의 가능, 2개 이상일 경우 개행 강제
```javascript
// Bad 
const obj = {foo: 'a', bar: 'b'}

// Good
const obj = {foo: 'a'};
const obj = {
  foo: 'a'
};
```
* 메서드 문법 사용 시 메서드 사이에 개행 추가
```javascript
class MyClass {
  foo() {
    //...
  }

  bar() {
    //...
  }
}
```

## 5. 함수
* 함수는 사용 전에 선언하고 함수 선언문은 변수 선언문 다음에 오도록 함
* 함수는 생성자가 아닌 선언식, 표현식으로 선언
```javascript
// Bad - 함수 생성자 사용
const doSomething = new Function('param1', 'param2', 'return param1 + param2;');

// Good - 함수 선언식 사용
function doSomething(param1, param2) {
  return param1 + param2;
}
// Good - 함수 표현식 사용
const doSomething = function(param1, param2) {
  return param1 + param2;
};
```
### 5.1 화살표 함수
* 함수 표현식 대신 화살표 함수 사용
```javascript
// Bad - 함수 표현식
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// Good - 화살표 함수
[1, 2, 3].map(x => {
  const y = x + 1;
  return x * y;
});
```
* 암시적 반환 최대한 활용 -> 함수의 본체가 하나의 표현식일 때 중괄호 생략
```javascript
// Bad
[1, 2, 3].map(number => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// Good - 암시적 return 사용 -> 암시적 반환 시 함수 본문 전 개행을 하지 않음
[1, 2, 3].map(number => `A string containing the ${number + 1}.`);
```

## 6. 템플릿 문자열
* 변수 등을 조합해서 문자열 생성 시 템플릿 문자열 이용 -> 문자열을 쉽고 명확하게 다루기 위함
```javascript
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

## 7. 블록 구문
* 한 줄짜리 블록일 경우라도 {}를 생략하지 않고, 줄바꿈 추천
* 키워드와 조건문 사이 빈칸 사용 ex) `a < 1`
* `switch-case` 사용 시 첫 번째 case문을 제외한 case문 사용 이전에 개행
```javascript
switch (value) {
  case 1:
    doSomething1();
    break;

  case 2:
    doSomething2();
    break;

  default:
    throw new Error('This shouldn\'t happen.');
}
```

## 8. 주석
* 주석 사용 시 코드와 맞춰서 들여쓰기 함
* 여러 줄 주석 사용 시 `*`의 들여쓰기를 맞춤

## 9. 공백
* 키워드, 연산자와 다른 코드 사이에 공백이 있어야 함 ex) `if (typeof str === 'string')`
* 콤마 다음에 값이 올 경우 공백이 있어야 함
```javascript
// Bad - 콤마 뒤 공백
const arr = [1,2,3,4];

// Good
const arr = [1, 2, 3, 4];
```

## 10. 그 외
* 조건 확인 시 삼중 등호 연산자 `===`, `!==` 사용