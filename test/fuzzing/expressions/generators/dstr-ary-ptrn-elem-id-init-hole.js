var callCount = 0;
var f;
f = function*([x = 23]) {
  assert.sameValue(x, 23);
  // another statement
  callCount = callCount + 1;
};
f([,]).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');