assert.throws(Test262Error, function() {
  for (const [x = (function() { throw new Test262Error(); })()] = [undefined]; ; ) {
    return;
  }
});