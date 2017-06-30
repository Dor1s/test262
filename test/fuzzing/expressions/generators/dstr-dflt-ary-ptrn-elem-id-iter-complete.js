var callCount = 0;
var f;
f = function*([x] = []) {
  assert.sameValue(x, undefined);
  callCount = callCount + 1;
};
f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');