var iter = (function*() { throw new Test262Error(); })();
var f = ([, ...x] = iter) => {};
assert.throws(Test262Error, function() {
  f();
});