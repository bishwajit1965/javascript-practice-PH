/* ES6 PRACTICE MODULE 31_5
===========================*/
// Problem solving 1. & 2.
let name = "Bishwajit";
const title = "Paul";

const fullName = `
The name of the person is ${name} and title is ${title}`;
// console.log("Output: ",fullName);

/* Problem solving 3.1 Take input to divide by 5
================================================*/
const divideByFive = (n) => n / 5;
// console.log("Result of division is: ", divideByFive(100));

/* Problem solving 3.2 Arrow function with two parameter to multiply the input number
===================================================================================== */
const sumNum = (a, b) => (a + 2) * (b + 2);
// console.log("Result of sum and then is: ", sumNum(5, 6));

/* Problem solving 3.3 Arrow function with three parameter to multiply the input numbers
======================================================================================== */
const mulThree = (a, b, c) => a * b * c;
// console.log(
//   "Result of multiplication of three numbers is: ",
//   mulThree(4, 5, 6)
// );

/* Problem solving 3.4 Arrow function with three parameter to multiply the input numbers
======================================================================================== */
const numbers = (x, y) => {
  let a = x + 2;
  let b = y + 2;
  let c = a * b;
  return c;
};
// console.log("Result of summation and then multiplication is: ", numbers(3, 5));

/* Arrow function with one parameter to multiply the input number
================================================================= */
const divide = (n) => {
  return n * 5;
};
// console.log(divide(4));

/* Problem solving 5. Arrow function to map() on array to multiply each array element with 5
============================================================================================ */
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pushedIn = [];
const mappedData = arrayNumbers.map((element) => pushedIn.push(element * 5));
// console.log(`The new array ${pushedIn} is: `, pushedIn);

/* Problem solving 6. Arrow function to filter() odd numbers only and shw it
============================================================================ */
const filterNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filteredIn = [];
const filtered = filterNumbers.filter((element) => element % 2 == 1);
// console.log(`The odd number array is: `, filtered);

/* Problem solving 7. Use find() to find price 5000 from an object
================================================================== */
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 1, name: "Tablet", price: 22000 },
  { id: 1, name: "Watch", price: 5000 },
  { id: 1, name: "Shirt", price: 1200 },
  { id: 1, name: "Pant", price: 1300 },
  { id: 1, name: "Belt", price: 700 },
];
const price = products.find((product) => {
  //   const items = product.name;
  //   return items;
  const items = product.price === 50000;
  return items;
});
// console.log(price);

const student = {
  name: "babul",
  age: 24,
  class: "M.A",
  address: {
    village: "Darajhat",
    district: "Jashore",
    phone: 312312313,
  },
  marks: {
    english: 42,
    bangla: 42,
    chemistry: 60,
    physics: 55,
    practical: {
      physics: 15,
      chemistry: 18,
    },
    math: 62,
  },
};

// const address = student["marks"]["practical"]["physics"];
// console.log(address);

/* Problem solving 8. destructuring js Object
================================================================== */
// Object destructuring
const shoppings = {
  machine: "lenovo",
  value: 50000,
  color: "silver",
};

const { machine, color, value } = shoppings;
// console.log(machine, color, value);

/* Problem solving 9. destructuring js array Object
================================================================== */
// Array destructuring
const book = ["Gulliver's Travels", 200, 500, "red"];
const [fiction, pages, cost, three] = book;
// console.log(fiction, pages, cost, three);

/* Problem solving 10. Arrow function with 3 parameters(one has default value) to add three
=========================================================================================== */
const myThreeNumbers = (a, b, c = 7) => a + b + c;
// console.log("Summation of three numbers is : ", myThreeNumbers(1, 7));
