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
  return newArray1 === newArray2;

}

// Return all the indices in the sentence for each character except space characters
const letterPositions = function (sentence) {
  const results = {};
  
  for (const index in sentence) {
    if (sentence[index] !== " ") {
    
      if (results[sentence[index]]) {
        results[sentence[index]].push(Number(index))
      } else {
        results[sentence[index]] = [Number(index)];
      }
    }
  }
  console.log(results);
  return results;
}

//test code
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);