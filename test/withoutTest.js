const assert = require('chai').assert;
const without = require('../without');

//test code
describe("Without", () => {
  it("returns ([1, 3]) for ([1, 2, 3], [2])", () => {
    assert.deepEqual(without([1, 2, 3], [2]), [1, 3]);
  });

  it('returns (["Rose", "Okere"]) for (["Rose", "C", "Okere"], ["C"])', () => {
    assert.deepEqual(without(["Rose", "C", "Okere"], ["C"]), ["Rose", "Okere"]);
  });

  it("returns ([1, 4, '5']) for ([1, 4, 3, '5'], [3, '4'])", () => {
    assert.deepEqual(without([1, 4, 3, "5"], [3, "4"]), [1, 4, "5"]);
  });


});