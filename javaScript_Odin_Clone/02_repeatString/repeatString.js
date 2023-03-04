const repeatString = function (str, num) {
  var strConcat = "";

  if (num < 0) {
    return "ERROR";
  } else if (str === "") {
    return "";
  } else if (num !== 0 && num !== null && str !== "") {
    strConcat = str;
    for (let i = 0; i < num - 1; i++) {
      strConcat = strConcat + str;
    }
  }

  return strConcat;
};

// Do not edit below this line
module.exports = repeatString;
