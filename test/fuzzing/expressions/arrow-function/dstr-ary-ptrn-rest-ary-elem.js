var callCount = 0;
var f;
f = ([...[x, y, z]]) => {
  assert.sameValue(x, 3);
  assert.sameValue(y, 4);
  assert.sameValue(z, 5);
  callCount = callCount + 1;
};
f([3, 4, 5]);
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');