var callCount = 0;
var f;
f = ([[x, y, z] = [4, 5, 6]] = [[7, 8, 9]]) => {
  assert.sameValue(x, 7);
  assert.sameValue(y, 8);
  assert.sameValue(z, 9);
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');