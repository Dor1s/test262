function thrower() {
  throw new Test262Error();
}
assert.throws(Test262Error, function() {
  for (var { x = thrower() } = {}; iterCount < 1; ) {
    return;
  }
});