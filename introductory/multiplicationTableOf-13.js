function multiplicationTable(num) {
  let element;
  console.log("MULTIPLICATION TABLE OF-", num);
  for (let i = 1; i <= 10; i++) {
    element = i * num;

    console.log("- - - - - - - - - -");
    console.log("|", num, "x", i, "|", " = ", element, "|");
  }
}

const num = 45;
const result = multiplicationTable(num);
