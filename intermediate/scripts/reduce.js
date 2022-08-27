/* Substract numbers
==================== */
const numbers = [175, 50, 25];
const data = numbers.reduce(myFunc);
function myFunc(total, num) {
  return total - num;
}
console.log(data);
// Output: 100

/* Round numbers
==================== */
// const digits = [15.5, 2.3, 4.7];
// const result = digits.reduce(getSum, 0);
// function getSum(total, number) {
//   return total + Math.round(number);
// }
// console.log(result);
const digits = [15.5, 2.3, 4.7];
const result = digits.reduce(
  (previousValue, currentValue) => previousValue + Math.round(currentValue),
  0
);
console.log(result);
