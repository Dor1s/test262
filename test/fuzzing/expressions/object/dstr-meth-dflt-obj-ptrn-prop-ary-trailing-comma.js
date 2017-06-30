var callCount = 0;
var obj = {
  method({ x: [y], } = { x: [45] }) {
    assert.sameValue(y,45);
    callCount = callCount + 1;
  }
};
obj.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');