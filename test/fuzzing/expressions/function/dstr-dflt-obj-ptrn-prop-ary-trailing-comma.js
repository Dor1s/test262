var callCount = 0;
var f;
f = function({ x: [y], } = { x: [45] }) {
  assert.sameValue(y,45);
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'function invoked exactly once');