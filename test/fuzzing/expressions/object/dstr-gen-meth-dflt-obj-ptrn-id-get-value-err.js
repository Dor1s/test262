var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
var obj = {
  *method({ poisoned } = poisonedProperty) {}
};
assert.throws(Test262Error, function() {
  obj.method();
});