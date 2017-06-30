var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
class C {
  static async *method({ poisoned } = poisonedProperty) {
    
  }
};
var method = C.method;
assert.throws(Test262Error, function() {
  method();
});