var callCount = 0;
function f([x = 23]) {
  assert.sameValue(x, 23);
  callCount = callCount + 1;
};
f([undefined]);
assert.sameValue(callCount, 1, 'function invoked exactly once');