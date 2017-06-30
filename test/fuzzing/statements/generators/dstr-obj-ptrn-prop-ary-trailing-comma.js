var callCount = 0;
function* f({ x: [y], }) {
  assert.sameValue(y,45);
  callCount = callCount + 1;
};
f({ x: [45] }).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');