var callCount = 0;
var f;
f = function([x]) {
  assert.sameValue(x, undefined);
  callCount = callCount + 1;
};
f([]);
assert.sameValue(callCount, 1, 'function invoked exactly once');