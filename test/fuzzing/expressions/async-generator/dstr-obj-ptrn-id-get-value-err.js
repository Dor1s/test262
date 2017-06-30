var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
var f;
f = async function*({ poisoned }) {
  
};
assert.throws(Test262Error, function() {
  f(poisonedProperty);
});