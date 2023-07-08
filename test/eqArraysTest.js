const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 8]), false);
assertEqual(eqArrays([1, 2, 3, 4], [3, 2, 4, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

