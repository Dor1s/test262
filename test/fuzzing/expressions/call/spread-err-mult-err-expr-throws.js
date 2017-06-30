assert.throws(Test262Error, function() {
  (function() {}(0, ...function*() { throw new Test262Error(); }()));
});