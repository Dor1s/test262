assert.throws(Test262Error, function() {
  new function() {}(0, ...function*() { throw new Test262Error(); }());
});