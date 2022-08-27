// Array

// Find an element using index
let marks = [40, 50, 60, 80];
// let data = marks[3];
// console.log(data);

// Change an array element by using array index
// let changed = (marks[1] = 55);
// console.log(changed);

// let findByValue = marks.indexOf(80);
// console.log("The index is:" + findByValue);

// Adding an array element
// marks.push(90);
// console.log("The number of elements in the array is: " + marks.length);

// Removing the first array element
// let removedFirst = marks.shift();
// marks.pop();
// console.log(removedFirst);

marks.unshift(10, 20, 30);
for (i = 0; i <= marks.length; i++) {
  console.log("The numbers are :" + marks[i]);
}
