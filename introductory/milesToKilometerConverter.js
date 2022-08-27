// Miles to kilometers converter
function milesToKilometerCalculator(miles) {
  // As 1 mile equals to 1.609 kilometers
  let kilometers = miles * 1.609;
  let data = parseFloat(kilometers).toFixed(2);
  console.log(miles, "Miles equals to ", data, "kilometers.");
}

milesToKilometerCalculator(60);
