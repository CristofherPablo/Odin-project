const reverseString = function(str) {
    var reverseStr = ''
    if(str === ''){
        return '';
    }else if(str !== ''){
      reverseStr = str[str.length - 1];
      for (let i = str.length -2; i >= 0; i--){
          reverseStr = reverseStr + str[i];
      };
    };
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
