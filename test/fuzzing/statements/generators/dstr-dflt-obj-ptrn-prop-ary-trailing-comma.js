var callCount = 0;
function* f({ x: [y], } = { x: [45] }) {
  assert.sameValue(y,45);
  callCount = callCount + 1;
};
f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');