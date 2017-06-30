var callCount = 0;
function* f([...{ length }] = [1, 2, 3]) {
  assert.sameValue(length, 3);
  callCount = callCount + 1;
};
f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');