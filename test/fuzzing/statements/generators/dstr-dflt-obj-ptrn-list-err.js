var initCount = 0;
function thrower() {
  throw new Test262Error();
}
function* f({ a, b = thrower(), c = ++initCount } = {}) {}
assert.throws(Test262Error, function() {
  f();
});
assert.sameValue(initCount, 0);