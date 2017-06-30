var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
var C = class {
  async *method({ poisoned: x = ++initEvalCount } = poisonedProperty) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method();
});
assert.sameValue(initEvalCount, 0);