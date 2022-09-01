// 1. Problem solving
const student = {
  name: "John Mathews",
  isPassed: true,
  age: 22,
  address: {
    houseNo: "#16",
    city: "Dhaka",
    road: "#12/F",
    city: "Dhaka",
    country: "Bangladesh",
  },
  phone: {
    name: "Vivo",
    model: "39G2",
    price: 22000,
  },
  studentAge: function () {
    return student.age;
  },
  numbers: [5, 12, 24, 35, 55, 56, 65],
  studentNumbers: function () {
    // for (let i = 0; i < student.numbers.length; i++) {
    //   console.log(student.numbers[i]);
    // }
    // return student.numbers[6];

    for (let i in student.phone) {
      console.log(student.phone[i]);
    }
    return student.phone["model"];
  },
  studentAddress: function () {
    for (let ad in student.address) {
      console.log(student.address[ad]);
    }
    return student.address["road"];
  },
};
// console.log(
//   student.studentAge(),
//   student.studentNumbers(),
//   student.studentAddress()
// );

// 2. problem solving
const templateString = `The house no is- ${student.address["houseNo"]} and the array second value is - ${student.numbers[1]}`;
// console.log(templateString);

// 3.1 Problem solving
const myNumber = () => 89;
// console.log(myNumber());

// 3.2 Problem solving four
const number = (num) => num / 17;
// console.log(number(170));

// 3.3 Problem solving
const twoNumbers = (numOne, numTwo) => (numOne + numTwo) / 2;
// console.log(twoNumbers(12, 18));

// 3.4 Problem solving
const numOperation = (paramOne, paramTwo) => {
  return paramOne + 7 + (paramTwo + 7);
};
// console.log(numOperation(13, 15));

// 4 Problem solving
const mapNumbers = [7, 14, 21, 28, 35, 42, 49, 56];
const numPushed = [];
const result = mapNumbers.map((num) => numPushed.push(num / 7));
// console.log(numPushed);

// 6 Problem solving
const districts = {
  name: "Jashore",
  upozilas: 9,
  schools: 140,
  colleges: 122,
  area: 55,
};
const numArray = [50, 51, 45, 78, 66, 35, 87, 99];
const [a, b, balance, ...rest] = numArray;
const { upozilas } = districts;
console.log("Number of upozilas: ", upozilas);
console.log("Value of variable balance is : ", balance);
