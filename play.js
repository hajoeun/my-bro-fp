// 함수형 프로그래밍의 기본은 '논리 꼬집기'다

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// _.each(list, v => console.log(v));
//
const isEven = v => v % 2 === 0;
const add = (a, b) => a + b;

// console.log(
//   _.reject(isEven)(list),
// );

_.pipe(
  _.map(v => v + 1),
  _.filter(isEven),
  _.hi,
  // _.reduce(add),
  sum => console.log(sum),
  _.always(10),
  v => console.log(v),
)(list);


