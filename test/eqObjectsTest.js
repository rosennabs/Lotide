const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

//Test code

describe('Equal arrays', () => {
  it("returns true", () => {
    assert.strictEqual(eqObjects(shirtObject , anotherShirtObject), true)
  });

  it("returns false", () => {
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false)
  });

  it("returns false", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false)
  });

  it("returns true", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true)
  });
  
});

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long"};
