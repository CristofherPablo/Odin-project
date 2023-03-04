const removeFromArray = function (array, ...args) {
  let arrayToUpdate = array.slice();

  for (let y = 0; y < args.length; y++) {
    for (let i = 0; i < arrayToUpdate.length; i++) {
      if (arrayToUpdate[i] === args[y]) {
        arrayToUpdate.splice(i, 1);
        i--;
      }
    }
  }
  return arrayToUpdate;
};

// Do not edit below this line
module.exports = removeFromArray;
