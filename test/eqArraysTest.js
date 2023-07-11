const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

//Test code
describe('Equal arrays', () => {
  it("returns false for [1, 2, 3] and [1, 2, 3, 8]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3, 8]), false)
  });

  it('returns true for ["1", "2", "3"] and ["1", "2", "3"]', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
  });
});


