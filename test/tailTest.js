const assert = require('chai').assert;
const tail = require('../tail');

describe("Tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns [Hi, World] for [Hello, Hi, World]", () => {
    assert.deepEqual(tail(["Hello", "Hi", "World"]), ["Hi", "World"]);
  });

  it("returns [] for [Hello]", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

});