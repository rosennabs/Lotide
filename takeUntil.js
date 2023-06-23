const assertArraysEqual = function (array1, array2) {
  printStatement = (eqArrays(array1, array2)) ? "✅ Both arrays are equal" : "❌ Both arrays are not equal";
  console.log(printStatement);
}

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

//Collect items from array until a truthy value is returned by callback
const takeUntil = function (array, callbackNum) {
  let result = [];
  for (let item of array) {
    if (!callbackNum(item)) {
      result.push(item);
    } else {
      return result;
    }
  } 
} 

const numbers = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const words = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil(numbers, num => num < 0), [ 1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(words, item => item === ","), [ "I've", 'been', 'to', 'Hollywood' ]);