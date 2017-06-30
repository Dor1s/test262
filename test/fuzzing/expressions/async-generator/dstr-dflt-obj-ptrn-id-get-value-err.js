var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
var f = async function*({ poisoned } = poisonedProperty) {
  
};
assert.throws(Test262Error, function() {
  f();
});