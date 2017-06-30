var F = {};
Object.defineProperty(F, Symbol.hasInstance, {
  get: function() {
    throw new Test262Error();
  }
});
assert.throws(Test262Error, function() {
  0 instanceof F;
});