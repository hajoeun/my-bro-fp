// 함수형 프로그래밍의 기본은 '논리 꼬집기'다

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (let v of list) {
//   console.log(v);
// }
//
// list.forEach(v => console.log(v));
//
// _.each(list, v => console.log(v));

// each는 부수 효과를 만들어 내는 돌림 함수

let result1 = [];

for (let v of list) {
  result1.push(v * 2);
}

console.log(result1)

console.log(_.map(list, v => v * 2));

// map은 같은 크기의 새로운 배열을 만들어 내는 함수

const isEven = (v) => v % 2 === 0;
const add = (a, b) => a + b;

console.log(
  _.filter(list, isEven),
  _.reject(list, isEven),
  _.find(list, v => v === 7),
  _.reduce(list, add)
);