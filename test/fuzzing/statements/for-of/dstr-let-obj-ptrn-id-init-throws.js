function thrower() {
  throw new Test262Error();
}
assert.throws(Test262Error, function() {
  for (let { x = thrower() } of [{}]) {
    return;
  }
});