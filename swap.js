// Swapping values

function swappingValues() {
  let first = 5;
  let second = 15;
  console.log("Initial values: ", first, second);
  const tempo = first;
  first = second;
  second = tempo;
  console.log("Swapped values: ", first, second);
  console.log("================================");
}
const swapped = swappingValues();

// Second way of swapping using array destructuring
let first = 5;
let second = 15;
console.log("Initial values second method : ", first, second);
[first, second] = [second, first];
console.log("Swapped values second method applied: ", first, second);
// console.log(swapped);
