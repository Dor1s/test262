var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
var obj = {
  method({ poisoned: x = ++initEvalCount } = poisonedProperty) {}
};
assert.throws(Test262Error, function() {
  obj.method();
});
assert.sameValue(initEvalCount, 0);