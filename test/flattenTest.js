const assert = require('chai').assert;
const flatten = require('../flatten');

//Test code

describe('Flatten arrays', () => {
  it('returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
  });
  
  it('returns [1, 2, 3, 4, 5, 9, 6] for [1, [2, 3, 4], [5, 9], [6]]', () => {
    assert.deepEqual(flatten([1, [2, 3, 4], [5, 9], [6]]), [1, 2, 3, 4, 5, 9, 6])
  });
})

