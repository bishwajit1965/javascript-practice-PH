// const cart = {
//   book: 5,
//   pen: 10,
//   pencil: 5,
//   brand: "samsung",
// };

// const list = cart.brand;
// console.log(list);
// console.log(cart.brand);

let sum = 0;
for (let i = 0; i <= 3; i++) {
  sum = sum + i;
}
console.log(sum);

const myString = "I love you my country very very much";
const length = myString.length;
// const str = myString[5];
console.log((myString[2] = "a"));
// console.log(str);
console.log(myString);

var student = {
  name: "Vishnu",
  age: 33,
};
const arr = [1, 2, 3, 4, 5, 6];
console.log((arr[arr.length - 1] = 5));
console.log(arr);

console.log(delete student.age);
