var callCount = 0;
function* f([_, x]) {
  assert.sameValue(x, undefined);
  callCount = callCount + 1;
};
f([]).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');