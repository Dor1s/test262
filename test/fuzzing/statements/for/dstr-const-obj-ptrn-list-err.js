var initCount = 0;
function thrower() {
  throw new Test262Error();
}
assert.throws(Test262Error, function() {
  for (const { a, b = thrower(), c = ++initCount } = {}; ; ) {
    return;
  }
});
assert.sameValue(initCount, 0);