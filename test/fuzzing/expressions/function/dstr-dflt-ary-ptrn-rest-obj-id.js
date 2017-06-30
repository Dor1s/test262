var callCount = 0;
var f;
f = function([...{ length }] = [1, 2, 3]) {
  assert.sameValue(length, 3);
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'function invoked exactly once');