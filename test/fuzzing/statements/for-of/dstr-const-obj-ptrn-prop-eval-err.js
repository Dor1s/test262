function thrower() {
  throw new Test262Error();
}
assert.throws(Test262Error, function() {
  for (const { [thrower()]: x } of [{}]) {
    return;
  }
});