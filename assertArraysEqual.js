const eqArrays = require('./eqArrays');

const assertArraysEqual = function (array1, array2) {
  printStatement = (eqArrays(array1, array2)) ? "✅ Both arrays are equal" : "❌ Both arrays are not equal";
  console.log(printStatement);
}


module.exports = assertArraysEqual;