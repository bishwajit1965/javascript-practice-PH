// Fahrenheit to celsius
function fahrenheitToCelsius(temperatureF) {
  if (temperatureF) {
    const cResult = parseFloat(((temperatureF - 32) * 5) / 9).toFixed(2);
    return cResult;
  } else {
    console.log("Input temperature");
  }
}
// Celsius to fahrenheit
function celsiusToFahrenheit(temperatureC) {
  if (temperatureC) {
    const fResult = parseFloat(temperatureC * 1.8 + 32).toFixed(2);
    return fResult;
  } else {
    console.log("Input temperature");
  }
}
/* Fahrenheit to celsius
====================================================================
Formula (32°F − 32) × 5/9 = 0°C
====================================================================*/
let temperatureF = 84; // Input various values in fahrenheit to test
const temperatureInCelsius = fahrenheitToCelsius(temperatureF);
console.log(
  temperatureF,
  "degree fahrenheit equals to - ",
  temperatureInCelsius,
  "degree celsius."
);
/* Celsius to fahrenheit
=================================================================
Formula  (30°C x 1.8) + 32 = 86°F
=================================================================*/
let temperatureC = 28.86; // Input various values in celsius to test
const temperatureInFahrenheit = celsiusToFahrenheit(temperatureC);
console.log(
  temperatureC,
  "degree celsius equals to - ",
  temperatureInFahrenheit,
  "degree fahrenheit."
);
