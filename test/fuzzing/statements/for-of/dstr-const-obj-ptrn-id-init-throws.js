function thrower() {
  throw new Test262Error();
}
assert.throws(Test262Error, function() {
  for (const { x = thrower() } of [{}]) {
    return;
  }
});