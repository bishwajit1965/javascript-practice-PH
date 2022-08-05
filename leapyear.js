// Leap year calculator
function leapYearCalculator(year) {
  if (year % 4 === 0) {
    console.log("The given year ", year, " is a leap-year.");
  } else {
    console.log("The given year", year, " is not a leap-year.");
  }
}

leapYearCalculator(2024);
