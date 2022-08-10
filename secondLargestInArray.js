function findSecondLargestArrayElement(numbers) {
  let first = -1;
  let second = -1;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > first) {
      second = first;
      first = element;
    } else if (element > second && element != first) {
      second = element;
    }
  }
  return second;
}

const numArray = [1, 2, 4, 6, 8, 9, 11, 12, 13, 14, 15];
const output = findSecondLargestArrayElement(numArray);
console.log("The second largest number is: ", output);
