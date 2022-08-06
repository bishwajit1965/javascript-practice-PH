/* Factorial calculator using while loop in decrementing method
===============================================================*/
function factorialOfNumber(num) {
  let factData = 1;
  let i = num;
  while (i >= 1) {
    factData = factData * i;
    i--;
  }
  return factData;
}
/* Only change value to get the factorial value of a number
===========================================================*/
const num = 7;
const result = factorialOfNumber(num);
console.log("Factorial of ", num, " is ", result);
