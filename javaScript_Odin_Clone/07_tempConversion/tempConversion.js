const convertToCelsius = function (fahrenheit) {
  //C = (F - 32) * 5/9
  let celsius = 0;
  celsius = (fahrenheit - 32) * (5 / 9);

  let howLong = celsius.toString();
  howLong = howLong.split(".");
  howLong = howLong[1];
  if (howLong != undefined) {
    howLong = howLong.length;
    if (howLong > 1) {
      return parseFloat(celsius.toFixed(1));
    } else {
      return celsius;
    }
  } else {
    return celsius;
  }
};

const convertToFahrenheit = function (celsius) {
  //F = (C * 9/5) + 32
  let fahrenheit = 0;
  fahrenheit = celsius * (9 / 5) + 32;

  let howLong = fahrenheit.toString();
  howLong = howLong.split(".");
  howLong = howLong[1];
  if (howLong != undefined) {
    howLong = howLong.length;
    if (howLong > 1) {
      return parseFloat(fahrenheit.toFixed(1));
    } else {
      return fahrenheit;
    }
  } else {
    return fahrenheit;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
