var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
assert.throws(Test262Error, function() {
  for (var { poisoned: x = ++initEvalCount } of [poisonedProperty]) {
    return;
  }
});
assert.sameValue(initEvalCount, 0);