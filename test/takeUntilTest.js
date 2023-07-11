const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

//test code
const numbers = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const words = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


describe("Head", () => {
  it("returns [ 1, 2, 5, 7, 2] for [1,2,3]", () => {
    assert.deepEqual(takeUntil(numbers, num => num < 0), [ 1, 2, 5, 7, 2]);
  });

  it("returns [\"I've\", 'been', 'to', 'Hollywood']", () => {
    assert.deepEqual(takeUntil(words, item => item === ","), ["I've", 'been', 'to', 'Hollywood']);
  });

});
