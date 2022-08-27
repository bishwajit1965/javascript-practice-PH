/*Practice module four suggestions by Jhankar Mahabub
===================================================
1. function footToInch(){
    will return only number
    }

2. function centimeterToMeter(){
    will return only number
    }

3. function paperRequirements(one, two, three){
    return required papers
    }
    book1Pages = 100 pages,
    book2Pages = 200 pages,
    book3Pages = 300 pages,

4. function bestFriends(friends){
    returns friend with largest name from an array
    }
    const myFriends = ['Peter', 'John', 'Jane', 'Parker', 'Muller', 'Jonanthan Swift', 'Price Harry potter', 'Jack Darrida', 'Jane Jones'];

5. function onlyPositive(numbers){
    returns only positives(stops when gets a negative number)
    }
    const myNumbers = [1, 11, 12, 13, 14, 15, 17, -19, -22, -25, -35, 36, 38, 42, 45, -50]; */

// Foot to inches
function footToInch(feetValue) {
  const inches = feetValue * 12;
  return inches;
}
const feet = 15;
const resultInInches = footToInch(feet);
// console.log(feet, " feet equals to ", resultInInches, " inches.");

// Centimeter to meter
function centimeterToMeter(centimeterValue) {
  // As 100 centimeters make 1 meter
  const meter = centimeterValue / 100;
  return meter;
}
const givenCentimeters = 350;
const resultInMeters = centimeterToMeter(givenCentimeters);
console.log(
  givenCentimeters,
  "Centimeters equal to :",
  resultInMeters,
  " meters."
);

// Paper requirements
function paperRequirements(bookPages) {
  let totalPages = 0;
  for (let i = 0; i < bookPages.length; i++) {
    const pagesIndex = bookPages[i];
    // console.log(pagesIndex);
    const pages = pagesIndex.pages * pagesIndex.quantity;
    totalPages = totalPages + pages;
  }
  return totalPages;
}
const books = [
  { name: "bookOne", pages: 100, quantity: 12 },
  { name: "bookTwo", pages: 200, quantity: 15 },
  { name: "BookThree", pages: 300, quantity: 20 },
];
const requiredPages = paperRequirements(books);
// console.log("Total required pages for books is :", requiredPages, "pages");

// Best friends
function bestFriends(friends) {
  let stringLength = friends[0].length;
  var bestFriend = friends[0];
  for (let i = 0; i < friends.length; i++) {
    let nameLength = friends[i].length;
    if (nameLength > stringLength) {
      bestFriend = friends[i];
      stringLength = nameLength;
    }
  }
  return bestFriend;
}

const myFriends = [
  "Peter",
  "John",
  "Jane",
  "Parker",
  "Muller",
  "Jonanthan Swift",
  "Harry potter",
  "Jacks Darrida",
  "Jane Jones",
];

const bestFriendIs = bestFriends(myFriends);
console.log(bestFriendIs);

// Fetch only positive values
function onlyPositive(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < 0) {
      break; // go out of the loop exiting operation
      // continue; will continue the loop and will get all the positive integers i the loop
    }
    console.log("Only positive values are: ", element);
  }
}
const myNumbers = [
  1, 11, 12, 13, 14, 15, 17, -19, -22, -25, -35, 36, 38, 42, 45, -50,
];
// const positiveValues = onlyPositive(myNumbers);
