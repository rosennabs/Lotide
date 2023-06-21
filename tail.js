
const assertEqual = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};
//Create a function named tail that returns the elements in an array except the first.
const tail = (anyArray) => {
  return anyArray.slice(1);
};


// TEST CODE
assertEqual(tail(["Hello", "Hi"]), ["Hi"]);
assertEqual(tail(["Hello", "Hi", "World"]), ["Hi", "World"]);
assertEqual(tail([]), ["Hi"]);
