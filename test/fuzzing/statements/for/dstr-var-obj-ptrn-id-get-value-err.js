var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
assert.throws(Test262Error, function() {
  for (var { poisoned } = poisonedProperty; iterCount < 1; ) {
    return;
  }
});