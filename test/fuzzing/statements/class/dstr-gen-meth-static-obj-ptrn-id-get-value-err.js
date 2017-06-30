var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
class C {
  static *method({ poisoned }) {}
};
assert.throws(Test262Error, function() {
  C.method(poisonedProperty);
});