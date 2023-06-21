const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Count each letter in the sentence
const countLetters = function (string) {
  count = {};

  for (const char of string) {
    //Ignore spaces
    if (char !== " ") {
      if (count[char]) {
        count[char] += 1;
      } else {
        count[char] = 1;
      }
    }  
  }
  return count;
};


const result = countLetters("lighthouse in the house");

//Test code
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["g"], 1);
assertEqual(result["h"], 4);
assertEqual(result["t"], 2);
assertEqual(result["o"], 2);
assertEqual(result["u"], 2);
assertEqual(result["s"], 2);
assertEqual(result["e"], 3);
assertEqual(result["n"], 1);
