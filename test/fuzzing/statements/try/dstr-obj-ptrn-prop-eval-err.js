function thrower() {
  throw new Test262Error();
}
assert.throws(Test262Error, function() {
  try {
    throw {};
  } catch ({ [thrower()]: x }) {}
});