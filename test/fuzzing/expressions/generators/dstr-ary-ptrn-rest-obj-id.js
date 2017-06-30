var callCount = 0;
var f;
f = function*([...{ length }]) {
  assert.sameValue(length, 3);
  callCount = callCount + 1;
};
f([1, 2, 3]).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');