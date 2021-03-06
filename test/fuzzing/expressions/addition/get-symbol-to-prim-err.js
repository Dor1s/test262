var thrower = {};
var counter = {};
var callCount = 0;
Object.defineProperty(thrower, Symbol.toPrimitive, {
  get: function() {
    throw new Test262Error();
  }
});
Object.defineProperty(counter, Symbol.toPrimitive, {
  get: function() {
    callCount += 1;
  }
});
assert.throws(Test262Error, function() {
  thrower + counter;
}, 'error from property access of left-hand side');
assert.sameValue(callCount, 0);
assert.throws(Test262Error, function() {
  counter + thrower;
}, 'error from property access of right-hand side');
assert.sameValue(callCount, 1);