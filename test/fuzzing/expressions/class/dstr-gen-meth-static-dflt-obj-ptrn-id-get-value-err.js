var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
var C = class {
  static *method({ poisoned } = poisonedProperty) {}
};
assert.throws(Test262Error, function() {
  C.method();
});