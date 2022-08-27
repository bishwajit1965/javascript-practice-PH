// Simple interest calculator
function interestCalculator(amount) {
  const calculatedInterest = parseFloat(
    (interestRate * amount * year) / 100
  ).toFixed(2);

  const amountWithInterest = parseFloat(
    (interestRate * amount * year) / 100 + amount
  ).toFixed(2);

  console.log(
    "Principal amount with interest in one year ",
    amountWithInterest
  );
  return calculatedInterest;
}

// Related data for interest calculator
const amount = 1000;
const interestRate = 10;
const year = 1;

// Returned result
const result = interestCalculator(amount);
console.log(
  "Principal amount ",
  amount,
  " interest of ",
  year,
  " year = ",
  result,
  "Tk"
);
