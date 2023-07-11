const assert = require('chai').assert;
const countLetters = require('../countLetters');


//Test code


describe("Count Letters", () => {
  const result = countLetters("door code");
  it("returns 2 for d in 'door code'", () => {
    assert.strictEqual(result["d"], 2);
  });
  it("returns 3 for o in 'door code'", () => {
    assert.strictEqual(result["o"], 3);
  });
  it("returns 1 for r in 'door code'", () => {
    assert.strictEqual(result["r"], 1);
  });
  it("returns 1 for c in 'door code'", () => {
    assert.strictEqual(result["c"], 1);
  });
  it("returns 1 for e in 'door code'", () => {
    assert.strictEqual(result["e"], 1);
  });
});

