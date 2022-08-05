// let numbers = [1, 10, 20, 30, 40, 44, 50, 55, 70, 75, 86];
// let phones = ["Nokia", "Samsung", "Vivo", "Oppo"];
// let i = 0;
// let text = " ";

// let books = ["html", "css", "Javascript", "Bootstrap", "Tailwind"];

// while (books[i]) {
//   text += books[i];
//   i++;
// }
// console.log("Books are: " + text);

// for (let i = 0; i <= books.length; i++) {
//   if (books[i] > 199) {
//     continue;
//   }
//   console.log("Book price: " + books[i]);
// }

let booksPrice = [129, 150, 170, 180, 200, 120, 240, 260, 275];
let i = 0;
while (i < booksPrice.length) {
  let books = booksPrice[i];
  if (books > 199) {
    i++;
    continue; //will skip over the values over or equal to 200 and show values below 199/
    // break; //will will come out of the loop as soon as it finds value 199 above.
  } else {
    console.log("Book prices are: " + books);
    i++;
  }
}

// function check(number) {
//   let x = number % 2 == 1;
//   console.log(x);
// }
// let number = 5;
// check(number);

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
