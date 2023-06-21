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

const without = function (source, itemsToRemove) {
  let withoutItems = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      withoutItems.push(source[i])
    }
  }
  return withoutItems;
}


console.log(without([1, 2, 3], [2]));
console.log(without([1, 4, 3, "5"], [3, "4"]));
console.log(without(["0", "2", "3"], ["3"]));
console.log(without(["Rose", "C", "Okere"], ["C"]));

assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
assertArraysEqual(without([1, 4, 3, "5"], [3, "4"]), [1, 4, "5"]);
assertArraysEqual(without(["0", "2", "3"], ["3"]), ["0", "2"]);
assertArraysEqual(without(["Rose", "C", "Okere"], ["C"]), ["Rose", "Okere"]);


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);