assert.throws(Test262Error, function() {
  const [x = (function() { throw new Test262Error(); })()] = [undefined];
});