var callCount = 0;
function* f({ x, }) {
  assert.sameValue(x, 23);
  callCount = callCount + 1;
};
f({ x: 23 }).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');