const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

//test code
describe('Letter positions', () => {
  it('returns [2, 3] for "hello"', () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3])
  });

  it('returns [3, 5, 15, 18] for "lighthouse in the house"', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18])
  });
});

