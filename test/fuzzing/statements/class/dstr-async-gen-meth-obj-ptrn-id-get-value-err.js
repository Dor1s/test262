var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
class C {
  async *method({ poisoned }) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method(poisonedProperty);
});