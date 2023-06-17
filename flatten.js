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


const flatten = function (arrays) {
  let flatArrays = [];
  for (let i = 0; i < arrays.length; i++) {
    if (!Array.isArray(arrays[i])) {
      flatArrays.push(arrays[i]);
    } else {
      for (let j = 0; j < arrays[i].length; j++) {
        flatArrays.push(arrays[i][j]);
      }
    }
  }
  return flatArrays;
}


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, 3, 4], [5, 9], [6]]), [1, 2, 3, 4, 5, 9, 6]);
assertArraysEqual(flatten([4, [2], [3, "thrice"]]), [4, 2, 3, "thrice"]);
