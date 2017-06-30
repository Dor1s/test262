var callCount = 0;
var f;
f = ({ x: [y], } = { x: [45] }) => {
  assert.sameValue(y,45);
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');