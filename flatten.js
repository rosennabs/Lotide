const assertArraysEqual = function (array1, array2) {
  switch (eqArrays(array1, array2)) {
    case true:
      console.log("✅ Both arrays are equal");
      break;
    case false:
      console.log("❌ Both arrays are not equal");
      break;
  }
};


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


console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, [2, 3, 4], [5, 9], [6]]));
console.log(flatten([4, [2], [3, "thrice"]]));

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, 3, 4], [5, 9], [6]]), [1, 2, 3, 4, 5, 9, 6]);
assertArraysEqual(flatten([4, [2], [3, "thrice"]]), [4, 2, 3, "thrice"]);
