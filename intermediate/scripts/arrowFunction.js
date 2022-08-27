const multiplication = (numOne, numTwo, numThree) => {
  const result = numOne * numTwo * numThree;
  return result;
};
// console.log(multiplication(4, 5, 6));

const test = (one = 10, two) => {
  const add = one + two;
  return add;
};

// console.log(test(10, 5));

let evenFriends = [];
let friends = ["pintu", "chintu", "Mintu", "Gulbahar", "Modhu", "Mala"];

friends.forEach((element) => {
  if (element.length % 2 == 0) {
    evenFriends.push(element);
  }
});
// console.log(evenFriends);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
let data = 0;
numbers.map((element) => {
  const num = Math.pow(element, 2);
  const length = numbers.length;
  sum += num;
  data = sum / length;
  return data;
});
console.log(data.toFixed(2));
