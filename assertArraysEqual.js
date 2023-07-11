const eqArrays = require('./eqArrays');

const assertArraysEqual = function (array1, array2) {
  printStatement = (eqArrays(array1, array2)) ? "✅ Both arrays are equal" : "❌ Both arrays are not equal";
  console.log(printStatement);
}

//Test code
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);


module.exports = assertArraysEqual;