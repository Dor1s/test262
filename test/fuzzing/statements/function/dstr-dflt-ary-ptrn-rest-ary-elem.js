var callCount = 0;
function f([...[x, y, z]] = [3, 4, 5]) {
  assert.sameValue(x, 3);
  assert.sameValue(y, 4);
  assert.sameValue(z, 5);
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'function invoked exactly once');