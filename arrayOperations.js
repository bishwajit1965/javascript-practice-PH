// Array operations
function arrayOperations(arrayData) {
  let distinct = [];
  for (let i = 0; i < arrayData.length; i++) {
    const index = i;
    const element = arrayData[index];
    //returns evens
    if (element % 2 === 0) {
      // Removes remove duplicates
      if (distinct.indexOf(element) == -1) {
        distinct.push(element);
      }
    }
  }
  return distinct;
}
const myArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 15, 12, 8, 9, 13, 14, 5, 6, 7,
];
const load = arrayOperations(myArray);
// console.log("The distinct even numbers are: ", load);

// Slice array elements
function sliceArray(data) {
  const slicedData = data.splice(2, 2, "Japan", "Germany");
  //   console.log(data);
  return slicedData;
}
const data = ["Bangladesh", "India", "China", "Bhutan"];
// console.log(data);

const slicer = sliceArray(data);
// console.log(slicer);

// Use of slice() and splice()
const array = ["Apple", "Orange", "Banana", "Pineapple"];
const sliced = array.slice(3);
console.log(sliced);

console.log(array);
