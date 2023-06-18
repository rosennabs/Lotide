// Checks if two arrays are equal
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

//Asserts a response for test code
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(actual, expected, "✅ Equal arrays");
  } else {
    console.log(actual, expected, "❌ Unequal arrays");
  }
};

//Gets the middle element(s) in an array
const middle = function (array) {

  let midNum = [];

  if (array.length > 2) {
    //if length is even, get the two middle elements
    if (array.length % 2 === 0) {
      midNum.push(array[(array.length / 2) - 1]);
      midNum.push(array[array.length / 2]);
      return midNum;
    }
    //if length is odd, get one middle element
    else {
      midNum.push(array[Math.floor(array.length / 2)]);
      return midNum;
    }
  } else {
    return midNum;
  }
};


//Calls functions and tests code
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

