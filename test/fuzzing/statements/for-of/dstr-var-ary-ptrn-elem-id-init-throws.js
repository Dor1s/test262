assert.throws(Test262Error, function() {
  for (var [x = (function() { throw new Test262Error(); })()] of [[undefined]]) {
    return;
  }
});