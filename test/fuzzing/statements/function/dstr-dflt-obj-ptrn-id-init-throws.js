function thrower() {
  throw new Test262Error();
}
function f({ x = thrower() } = {}) {}
assert.throws(Test262Error, function() {
  f();
});