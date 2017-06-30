var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
var C = class {
  async *method({ poisoned: x = ++initEvalCount }) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method(poisonedProperty);
});
assert.sameValue(initEvalCount, 0);