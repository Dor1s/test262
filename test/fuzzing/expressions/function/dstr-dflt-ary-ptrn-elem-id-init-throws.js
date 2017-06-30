var f = function([x = (function() { throw new Test262Error(); })()] = [undefined]) {};
assert.throws(Test262Error, function() {
  f();
});