assert.throws(Test262Error, function() {
  var [x = (function() { throw new Test262Error(); })()] = [undefined];
});