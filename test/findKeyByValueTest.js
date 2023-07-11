const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

//Test code

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  action: "Fast and Furious"
};

describe('Find keys by value', () => {
  it('returns drama for The Wire', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  });

  it('returns sci-fi for The Expanse', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi")
  });

  it('returns undefined for Fast Five', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Fast Five"), undefined)
  });
  
});



