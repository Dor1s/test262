var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
var C = class {
  static async *method({ poisoned }) {
    
  }
};
var method = C.method;
assert.throws(Test262Error, function() {
  method(poisonedProperty);
});