/* Problem-1 Function within a function OK
==========================================*/
function foo() {
  console.log("Foo");
  bar();
}
function bar() {
  console.log("Bar");
}
// foo();
// bar();

/* Problem-2 Make average of three numbers OK
==============================================*/
let num1 = "";
let num2 = "";
let num3 = "";
let total = "";
let avg = "";
function make_average(num1, num2, num3) {
  total = num1 + num2 + num3;
  avg = total / 3;
  console.log(avg);
}
// make_average(50, 60, 70);

/* Problem-3 Finding Odd and Even numbers from inputs OK
========================================================*/
let number = 0;
let data = 0;
function odd_even(number) {
  let data = (number + 2) % 2;
  if (data == 0) {
    console.log("The given number is even");
  } else {
    console.log("The given number is even odd");
  }
}
// odd_even(19);

/* Problem-4 Make array average using function OK
=================================================*/
var numbers = [10, 20, 30, 40, 50];
var totalAmount = 0;
function make_average() {
  for (var x = 0; x < numbers.length; x++) {
    var data = (totalAmount += numbers[x]);
  }
  console.log(data);
  console.log(data / numbers.length);
}
// make_average();

/* Problem-5 Crossing a road on Traffic Signal OK
=================================================*/
let signal = "green";
switch (signal) {
  case "yellow":
    console.log("Yellow, stop, you can not cross the road.");
    break;

  case "red":
    console.log("Red, danger you can not cross the road.");
    break;

  case "green":
    console.log(
      "Green !!! Hurry up, cross the road, class will start soon !!!"
    );
    break;

  default:
    console.log("NO ! wait a bit, t;he signal is not positive.");
    break;
}
