var callCount = 0;
var f;
f = ([[x, y, z] = [4, 5, 6]]) => {
  assert.sameValue(x, 4);
  assert.sameValue(y, 5);
  assert.sameValue(z, 6);
  callCount = callCount + 1;
};
f([]);
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');