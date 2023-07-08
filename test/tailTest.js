// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// // Test Code: 
// const result2 = tail(["Hello", "Rose", "Hi", "World"]);
// assertEqual(result2.length, 3); 
// assertEqual(result2[0], "Rose"); 
// assertEqual(result2[1], "Hi"); 
// assertEqual(result2[2], "World"); 

// // Test Case: Check the original array 
// const words = ["Hello", "Rose", "Hi", "World"];
// tail(words);
// assertEqual(words.length, 4);

const assert = require('chai').assert;
const tail = require('../tail');

describe("Tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns [Hi, World] for [Hello, Hi, World]", () => {
    assert.deepEqual(tail(["Hello", "Hi", "World"]), ["Hi", "World"]);
  });

  it("returns [] for [Hello]", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

});