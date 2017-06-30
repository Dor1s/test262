var iter = {};
Object.defineProperty(iter, Symbol.iterator, {
  get: function() {
    throw new Test262Error();
  }
});
assert.throws(Test262Error, function() {
  (function() {}(0, ...iter));
});