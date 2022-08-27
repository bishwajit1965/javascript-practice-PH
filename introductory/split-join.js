// split join
const stringData =
  "Hello viewers, Javascript is awesome. I like coding in Javascript.";

/*Splitting
===============================*/
const sentences = stringData.split(".");
const portion = stringData.split("");
const characters = stringData.split(" ");

// console.log(sentences);
// console.log(portion);
// console.log(characters);

/*Slicing
==============================*/
const part = stringData.slice(6, 13);
// console.log(part);

/* Join
============================== */
const myData = ["one", "two", "three", "four", "five"];
const herData = ["six", "seven", "eight", "nine", "ten"];

const partJoin = myData.join(" + ");

const joinedArray = myData.concat(herData);
console.log("Joined array elements are: ", joinedArray);
console.log("Joined parts are: ", partJoin);

/* Substring
============================== */
const partSubstring = stringData.substring(6, 13);
// console.log(partSubstring);
