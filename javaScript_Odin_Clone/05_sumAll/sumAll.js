const sumAll = function(number1, number2) {
  
    if(Number.isInteger(number1) && Number.isInteger(number2) 
       && number1 >= 0 && number2 >= 0){
        let largestNumber = 0;
        let smallestNumber = 0;
      if(number1 >= number2){
        largestNumber = number1;
        smallestNumber = number2;
      }else{
        largestNumber = number2;
        smallestNumber = number1;
      };
      let sum = 0;
      for(let i = smallestNumber; i <= largestNumber; i++){
        sum += i;
      };
      return sum;
    }else{
      return 'ERROR';
    };
  };

// Do not edit below this line
module.exports = sumAll;
