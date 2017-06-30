var obj = {
  attr: null,
  get [Symbol.unscopables]() { throw new Test262Error(); }
};
assert.throws(Test262Error, function() {
  with (obj) {
    ({ attr });
  }
});