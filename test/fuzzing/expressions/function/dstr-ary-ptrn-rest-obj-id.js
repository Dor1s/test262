var callCount = 0;
var f;
f = function([...{ length }]) {
  assert.sameValue(length, 3);
  callCount = callCount + 1;
};
f([1, 2, 3]);
assert.sameValue(callCount, 1, 'function invoked exactly once');