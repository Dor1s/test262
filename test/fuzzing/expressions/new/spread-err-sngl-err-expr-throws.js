assert.throws(Test262Error, function() {
  new function() {}(...function*() { throw new Test262Error(); }());
});