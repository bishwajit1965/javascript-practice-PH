// Reverse string
function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }
  return reversed;
}
myString = "Hello Bangladesh, I love you very much.";
const reversedStr = reverseString(myString);
console.log(reversedStr);
