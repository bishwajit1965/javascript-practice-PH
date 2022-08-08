// Maximum number in an array
function maximumNumberInArray(numbers) {
  let number = numbers[0];
  let largest;
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];
    if (number < element) {
      largest = element;
    }
  }
  return largest;
}

const numbers = [
  20, 12, 34, 176, 430, 440, 550, 660, 720, 420, 1200, 1250, 10, 11, 19,
];
const maxArrayElement = maximumNumberInArray(numbers);
console.log("The largest number in the array is :", maxArrayElement);
