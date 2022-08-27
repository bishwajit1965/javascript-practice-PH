/* Factorial calculator in decrementing approach
================================================*/
function factorial(number) {
  let fact = 1;
  for (let i = number; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
}
let number = 6;
let factorialResult = factorial(number);
console.log("The factorial of ", number, " is: ", factorialResult);
