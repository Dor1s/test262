var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
var f = async function*({ poisoned: x = ++initEvalCount } = poisonedProperty) {
  
};
assert.throws(Test262Error, function() {
  f();
});
assert.sameValue(initEvalCount, 0);