function thrower() {
  throw new Test262Error();
}
assert.throws(Test262Error, function() {
  for (var { x: y = thrower() } of [{}]) {
    return;
  }
});