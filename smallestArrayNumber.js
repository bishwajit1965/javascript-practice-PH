// Minimum number calculation

function smallestArrayNumber(numbers) {
  let minimumValue = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    numbers[i];
    if (minimumValue < numbers[i]) {
      minimumValue = minimumValue;
    } else if (minimumValue > numbers[i]) {
      minimumValue = numbers[i];
    } else if (minimumValue == numbers[i]) {
      minimumValue = minimumValue;
    }
  }
  return minimumValue;
}

const arrayNum = [100, 1, 2, 3, 200, 4, 5, 6, 500, 7, 8, 9, 0];
const result = smallestArrayNumber(arrayNum);
console.log("The minimum number of the array is : ", result);
