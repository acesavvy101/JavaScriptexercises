const convertToCelsius = function(num) {
  let total = (num - 32) * (5/9)
  const rounded1 = Math.round(total * 10)/10
  return rounded1;
};

const convertToFahrenheit = function(num) {
  let total2 = (num * (9/5) + 32);
  const rounded2 = Math.round(total2 * 10)/10
  return rounded2;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
