// Prime number calculation

function primeNumber(numbers) {
  let primeNum = numbers != 1;
  for (let i = 1; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 == 1) {
      primeNum = element;
      console.log(element);
    }
  }
  return primeNum;
}

const arrayNum = [100, 1, 2, 3, 200, 250, 4, 5, 6, 500, 7, 8, 9, 0];
const result = primeNumber(arrayNum);
console.log("The prime number(s) : ", result);
