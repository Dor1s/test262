var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
assert.throws(Test262Error, function() {
  for (const { poisoned } of [poisonedProperty]) {
    return;
  }
});