var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
assert.throws(Test262Error, function() {
  try {
    throw poisonedProperty;
  } catch ({ poisoned }) {}
});