var callCount = 0;
function* f([...{ length }]) {
  assert.sameValue(length, 3);
  callCount = callCount + 1;
};
f([1, 2, 3]).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');