var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
assert.throws(Test262Error, function() {
  const { poisoned: x = ++initEvalCount } = poisonedProperty;
});
assert.sameValue(initEvalCount, 0);