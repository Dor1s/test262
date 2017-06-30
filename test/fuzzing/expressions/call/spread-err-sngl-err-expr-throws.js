assert.throws(Test262Error, function() {
  (function() {}(...function*() { throw new Test262Error(); }()));
});