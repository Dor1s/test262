var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
assert.throws(Test262Error, function() {
  for (let { poisoned: x = ++initEvalCount } = poisonedProperty; ; ) {
    return;
  }
});
assert.sameValue(initEvalCount, 0);