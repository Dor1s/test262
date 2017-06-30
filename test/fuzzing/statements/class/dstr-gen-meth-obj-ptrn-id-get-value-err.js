var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
class C {
  *method({ poisoned }) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method(poisonedProperty);
});