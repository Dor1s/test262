var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
class C {
  *method({ poisoned: x = ++initEvalCount } = poisonedProperty) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method();
});
assert.sameValue(initEvalCount, 0);