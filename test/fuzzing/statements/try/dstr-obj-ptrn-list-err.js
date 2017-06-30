var initCount = 0;
function thrower() {
  throw new Test262Error();
}
assert.throws(Test262Error, function() {
  try {
    throw {};
  } catch ({ a, b = thrower(), c = ++initCount }) {}
});
assert.sameValue(initCount, 0);