var callCount = 0;
function* f([x, y, z]) {
  assert.sameValue(x, 1);
  assert.sameValue(y, 2);
  assert.sameValue(z, 3);
  callCount = callCount + 1;
};
f([1, 2, 3]).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');