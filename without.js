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

const without = function (source, itemsToRemove) {
  let withoutItems = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      withoutItems.push(source[i])
    }
  } 
  return withoutItems;
}

assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
assertArraysEqual(without([1, 4, 3, "5"], [3, "4"]), [1, 4, "5"]);
assertArraysEqual(without(["0", "2", "3"], ["3"]), ["0", "2"]);
assertArraysEqual(without(["Rose", "C", "Okere"], ["C"]), ["Rose", "Okere"]);


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);