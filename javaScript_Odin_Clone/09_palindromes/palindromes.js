const palindromes = function (string) {
    let stringOrigin = string.toLowerCase();
    stringOrigin = stringOrigin.replace(/\W+/g, '');
     let compare = "";
     for(let i = stringOrigin.length - 1; i >= 0; i--){
        compare += stringOrigin[i];
     }

     if(compare === stringOrigin){
        return true;
     }else{
        return false;
     }
};

// Do not edit below this line
module.exports = palindromes;
