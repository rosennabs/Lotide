const eqObjects = require('./eqObjects');

//Prints assertion message to check if two objects are equal
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  printStatement = eqObjects(actual, expected) ? `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  
  console.log(printStatement);
};

module.exports = assertObjectsEqual;



