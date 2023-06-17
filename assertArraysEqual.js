const assertArraysEqual = function (array1, array2) {
  console.log(eqArrays(array1, array2));
};

const eqArrays = (array1, array2) => {
  let newArray1 = "";
  let newArray2 = "";
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      newArray1 += array1[i];
      newArray2 += array2[i];
    } else {
      return "❌ Both arrays are not equal";
    }
  } 
  if (newArray1 === newArray2) {
    return "✅ Both arrays are equal";
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);