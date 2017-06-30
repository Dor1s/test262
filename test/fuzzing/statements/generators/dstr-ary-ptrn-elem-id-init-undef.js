var callCount = 0;
function* f([x = 23]) {
  assert.sameValue(x, 23);
  callCount = callCount + 1;
};
f([undefined]).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');