var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
var C = class {
  method({ poisoned: x = ++initEvalCount }) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method(poisonedProperty);
});
assert.sameValue(initEvalCount, 0);