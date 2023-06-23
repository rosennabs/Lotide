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

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callbackFunction) => {
  const results = [];
  for (let item of array) {
    results.push(callbackFunction(item));
  }
  return results;
}

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[0] + "s"), ['g', 'c', 't', 'm', 'j']);
assertArraysEqual(map(words, word => word[0] + "s"), [ 'gs', 'cs', 'ts', 'ms', 'ts' ]);
