const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (array1, array2) => {
  let newArray1 = "";
  let newArray2 = "";
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      newArray1 += array1[i];
      newArray2 += array2[i];
    } else {
      return false;
    }
  } 
  if (newArray1 === newArray2) {
    return true;
  }
}
 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);