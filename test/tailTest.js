const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Code: 
const result2 = tail(["Hello", "Rose", "Hi", "World"]);
assertEqual(result2.length, 3); 
assertEqual(result2[0], "Rose"); 
assertEqual(result2[1], "Hi"); 
assertEqual(result2[2], "World"); 

// Test Case: Check the original array 
const words = ["Hello", "Rose", "Hi", "World"];
tail(words);
assertEqual(words.length, 4);