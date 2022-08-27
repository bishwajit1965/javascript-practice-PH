// Calculating sum of numbers using recursion
function sum(i) {
  if (i == 1) {
    return 1;
  }
  return i + sum(i - 1);
}
const result = sum(5);
console.log(result);

// Calculating factorial using recursion

function factorial(i) {
  if (i == 1) {
    return 1;
  }
  return i * factorial(i - 1);
}
const output = factorial(5);
// console.log(output);
