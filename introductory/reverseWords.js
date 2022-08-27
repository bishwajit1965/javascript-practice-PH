// Reverse words
function reverseWords(string) {
  const words = string.split(" ");
  //   console.log(words);
  const result = [];
  for (let i = words.length - 1; i >= 0; i--) {
    const element = words[i];
    result.push(element);
  }
  const reversedData = result.join(" ");
  return reversedData;
}
myString = "Hello Bangladesh, I love you very much.";
const reversedWords = reverseWords(myString);
console.log("The reversed worded sentence is: ", reversedWords);
