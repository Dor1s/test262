assert.throws(Test262Error, function() {
  for (let [x = (function() { throw new Test262Error(); })()] = [undefined]; ; ) {
    return;
  }
});