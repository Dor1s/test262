var callCount = 0;
var f;
f = function([[x, y, z] = [4, 5, 6]]) {
  assert.sameValue(x, 7);
  assert.sameValue(y, 8);
  assert.sameValue(z, 9);
  callCount = callCount + 1;
};
f([[7, 8, 9]]);
assert.sameValue(callCount, 1, 'function invoked exactly once');