const eqObjects = require('./eqObjects');
const inspect = require('util').inspect;

//Prints assertion message to check if two objects are equal
const assertObjectsEqual = function (actual, expected) {
  
  printStatement = eqObjects(actual, expected) ? `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  
  console.log(printStatement);
};

//Test code
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);


module.exports = assertObjectsEqual;



