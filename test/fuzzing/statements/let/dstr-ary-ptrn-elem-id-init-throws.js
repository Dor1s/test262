assert.throws(Test262Error, function() {
  let [x = (function() { throw new Test262Error(); })()] = [undefined];
});