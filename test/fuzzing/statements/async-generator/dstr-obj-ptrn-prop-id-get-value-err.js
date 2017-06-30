var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
async function* f({ poisoned: x = ++initEvalCount }) {
  
};
assert.throws(Test262Error, function() {
  f(poisonedProperty);
});
assert.sameValue(initEvalCount, 0);