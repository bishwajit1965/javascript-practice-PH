// Counting array elements and counting odd array elements as well.
function SumAllNumbersOfAnArray(myNumbers) {
  let sum = 0;
  for (let i = 0; i < myNumbers.length; i++) {
    const index = i;
    const element = myNumbers[index];
    sum = sum + element;
  }
  return sum;
}
function addOddNumbersOfAnArray(myNumbers) {
  const oddNumbers = [];
  let sumOfOdds = 0;
  for (let i = 0; i < myNumbers.length; i++) {
    const index = i;
    const element = myNumbers[index];
    if (element % 2 !== 0) {
      oddNumbers.push(element);
      sumOfOdds = sumOfOdds + element;
    }
  }
  return sumOfOdds;
}
const myNumbers = [12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25];
// Total of odd numbers
const oddNumbers = addOddNumbersOfAnArray(myNumbers);
console.log("The odd numbers sum is: ", oddNumbers);
const oddNumbersSum = SumAllNumbersOfAnArray(oddNumbers);

// Total of all numbers
const myNumbersSum = SumAllNumbersOfAnArray(myNumbers);
console.log("Sum of all numbers is: ", myNumbersSum);
