const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,nun2) {
	return num1 - nun2;
};

const sum = function(numString) {
	if(numString == []){
    return 0;
  }else{
    let sum = 0;
    for(let i = 0; i < numString.length; i++){
      sum += numString[i];
    }
    return sum;
  }
};

const multiply = function(multString) {
  
    let mult = 0;
    for(let i = 0; i < multString.length; i++){
      if(i == 0 && multString[0] != 0){
        mult = multString[0];
      }else{
        mult *= multString[i];
      }
    }
    return mult;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(number) {
	if(number == 0){
    return 1;
  }else{
    return number * factorial(number - 1);
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
