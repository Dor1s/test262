var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
var C = class {
  *method({ poisoned } = poisonedProperty) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method();
});