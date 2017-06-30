var F = {};
var callCount = 0;
var thisValue, args;
F[Symbol.hasInstance] = function() {
  thisValue = this;
  args = arguments;
  callCount += 1;
};
0 instanceof F;
assert.sameValue(callCount, 1);
assert.sameValue(thisValue, F);
assert.sameValue(args.length, 1);
assert.sameValue(args[0], 0);