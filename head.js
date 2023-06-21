
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Create a function named head that returns the first element in an array.
const head = (anyArray) => {
    return anyArray[0]
  }

// TEST CODE
assertEqual("Hello", "Hi");
assertEqual(1, 1);
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

