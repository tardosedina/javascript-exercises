const convertToCelsius = function(celsius) {
  let fahrenheit = Math.round((celsius - 32) / 1.8);
  return fahrenheit;
};

const convertToFahrenheit = function(fahrenheit) {
  let celsius = Math.round((fahrenheit * 1.8) + 32);
  return celsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
