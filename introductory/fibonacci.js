// Fibonacci number
let fibonacciNumber = [0, 1];
for (let i = 2; i < 50; i++) {
  fibonacciNumber[i] = fibonacciNumber[i - 1] + fibonacciNumber[i - 2];
}
console.log(fibonacciNumber);
