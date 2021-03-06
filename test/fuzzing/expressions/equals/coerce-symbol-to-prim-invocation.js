var y = {};
var callCount = 0;
var thisVal, args;
y[Symbol.toPrimitive] = function() {
  callCount += 1;
  thisVal = this;
  args = arguments;
};
0 == y;
assert.sameValue(callCount, 1, 'method invoked exactly once');
assert.sameValue(thisVal, y, '`this` value is the object being compared');
assert.sameValue(args.length, 1, 'method invoked with exactly one argument');
assert.sameValue(
  args[0],
  'default',
  'method invoked with the string "default" as the first argument'
);