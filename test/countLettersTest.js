const assert = require('chai').assert;
const countLetters = require('../countLetters');


//Test code


describe("Count Letters", () => {
  const result = countLetters("door code");
  it("returns 2 for d in 'door code'", () => {
    assert.strictEqual(result["d"], 2);
  });
});

// assertEqual(result["d"], 2);
// assertEqual(result["o"], 3);
// assertEqual(result["r"], 1);
// assertEqual(result["c"], 1);
// assertEqual(result["e"], 1);
