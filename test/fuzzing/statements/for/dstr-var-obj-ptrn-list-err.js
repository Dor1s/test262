var initCount = 0;
function thrower() {
  throw new Test262Error();
}
assert.throws(Test262Error, function() {
  for (var { a, b = thrower(), c = ++initCount } = {}; iterCount < 1; ) {
    return;
  }
});
assert.sameValue(initCount, 0);