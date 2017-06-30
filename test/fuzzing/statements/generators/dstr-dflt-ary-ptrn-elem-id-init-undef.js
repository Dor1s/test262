var callCount = 0;
function* f([x = 23] = [undefined]) {
  assert.sameValue(x, 23);
  callCount = callCount + 1;
};
f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');