const assert = require('chai').assert;
const map = require('../map');

//test code

const words = ["ground", "control", "to", "major", "tom"];

describe("Map", () => {
  it("returns ['g', 'c', 't', 'm', 't']", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it("returns [ 'gs', 'cs', 'ts', 'ms', 'ts' ]", () => {
    assert.deepEqual(map(words, word => word[0] + "s"), [ 'gs', 'cs', 'ts', 'ms', 'ts' ]);
  });
  
});
