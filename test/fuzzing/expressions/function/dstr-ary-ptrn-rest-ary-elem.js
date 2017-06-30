var callCount = 0;
var f;
f = function([...[x, y, z]]) {
  assert.sameValue(x, 3);
  assert.sameValue(y, 4);
  assert.sameValue(z, 5);
  callCount = callCount + 1;
};
f([3, 4, 5]);
assert.sameValue(callCount, 1, 'function invoked exactly once');