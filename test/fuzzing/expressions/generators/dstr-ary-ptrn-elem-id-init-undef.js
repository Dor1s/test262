var callCount = 0;
var f;
f = function*([x = 23]) {
  assert.sameValue(x, 23);
  callCount = callCount + 1;
};
f([undefined]).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');