var callCount = 0;
var obj = {
  *method({ x: [y], }) {
    assert.sameValue(y,45);
    callCount = callCount + 1;
  }
};
obj.method({ x: [45] }).next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');