var initCount = 0;
function thrower() {
  throw new Test262Error();
}
assert.throws(Test262Error, function() {
  for (let { a, b = thrower(), c = ++initCount } of [{}]) {
    return;
  }
});
assert.sameValue(initCount, 0);