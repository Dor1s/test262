function thrower() {
  throw new Test262Error();
}
var f = function*({ x = thrower() } = {}) {};
assert.throws(Test262Error, function() {
  f();
});