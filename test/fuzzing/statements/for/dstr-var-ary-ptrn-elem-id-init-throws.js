assert.throws(Test262Error, function() {
  for (var [x = (function() { throw new Test262Error(); })()] = [undefined]; iterCount < 1; ) {
    return;
  }
});