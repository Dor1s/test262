var callCount = 0;
function f({ x: [y], }) {
  assert.sameValue(y,45);
  callCount = callCount + 1;
};
f({ x: [45] });
assert.sameValue(callCount, 1, 'function invoked exactly once');