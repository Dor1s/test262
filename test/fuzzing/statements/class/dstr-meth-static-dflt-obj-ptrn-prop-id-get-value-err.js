var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
class C {
  static method({ poisoned: x = ++initEvalCount } = poisonedProperty) {}
};
assert.throws(Test262Error, function() {
  C.method();
});
assert.sameValue(initEvalCount, 0);