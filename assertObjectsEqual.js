//Checks if two objects are equal
const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length === object2Keys.length) {
    for (item of object1Keys) {
      if (object1[item] === object2[item] || eqArrays(object1[item], object2[item])) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};

//Checks if two arrays are equal
const eqArrays = (array1, array2) => {
  let newArray1 = "";
  let newArray2 = "";

  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        newArray1 += array1[i];
        newArray2 += array2[i];
      } else {
        return false;
      }
    }
  }
  if (newArray1 === newArray2) {
    return true;
  }
}
//Prints assertion message
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

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


