function thrower() {
  throw new Test262Error();
}
assert.throws(Test262Error, function() {
  for (var { [thrower()]: x } = {}; iterCount < 1; ) {
    return;
  }
});