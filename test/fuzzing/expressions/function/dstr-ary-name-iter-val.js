var callCount = 0;
var f;
f = function([x, y, z]) {
  assert.sameValue(x, 1);
  assert.sameValue(y, 2);
  assert.sameValue(z, 3);
  callCount = callCount + 1;
};
f([1, 2, 3]);
assert.sameValue(callCount, 1, 'function invoked exactly once');